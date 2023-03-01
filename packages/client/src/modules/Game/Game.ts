import { Card } from './components/Card';

import { EventBus } from '../EventBus';

import { shuffle, EVENTS_LIST } from './utils';

import { COLORS, CARDS_WIDTH, TIMEOUT_FOR_TIMER } from './constants';

class Game {
  protected canvasElement?: HTMLCanvasElement;
  protected canvasContext?: CanvasRenderingContext2D;
  protected cards: Card[];
  protected shuffledColors: string[];
  protected flippedCards: Card[];
  protected clickedCards: number;
  protected matchedCards: number;
  protected requestAnimationFunction?: number;
  protected _isGameFinished: boolean;
  protected _timeLeft: number;
  protected timer?: ReturnType<typeof setTimeout>;
  protected Events: EventBus;

  constructor() {
    this.Events = new EventBus();
    this.timer = undefined;

    this.cards = [];
    this.shuffledColors = shuffle(COLORS);
    this.flippedCards = [];
    this.clickedCards = 0;
    this.matchedCards = 0;
    this.requestAnimationFunction = undefined;
    this._isGameFinished = false;
    this._timeLeft = 120;

    this.drawCards = this.drawCards.bind(this);
    this.updateData = this.updateData.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.clickCallback = this.clickCallback.bind(this);
    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.timerCallback = this.timerCallback.bind(this);
  }

  protected drawBackground() {
    (this.canvasContext as CanvasRenderingContext2D).fillStyle = 'white';
    (this.canvasContext as CanvasRenderingContext2D).fillRect(
      0,
      0,
      (this.canvasElement as HTMLCanvasElement).width,
      (this.canvasElement as HTMLCanvasElement).height
    );
  }

  protected createCards() {
    const leftGap =
      ((this.canvasElement as HTMLCanvasElement).width - CARDS_WIDTH) / 2;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        this.cards.push(
          new Card({
            x: i * 78 + 10 + leftGap,
            y: j * 78 + 40,
            color: this.shuffledColors.pop() as string,
            canvasContext: this.canvasContext as CanvasRenderingContext2D,
          })
        );
      }
    }
  }

  protected updateData() {
    if (this.matchedCards === this.cards.length / 2) {
      this.endGame();
    }

    if (this.flippedCards.length === 2) {
      const firstCard = this.flippedCards[0];
      const secondCard = this.flippedCards[1];

      if (firstCard.cardColor === secondCard.cardColor) {
        firstCard.isMatch = true;
        secondCard.isMatch = true;
        this.flippedCards = [];
        this.clickedCards = 0;
        this.matchedCards++;
      }

      if (firstCard.cardColor !== secondCard.cardColor) {
        setTimeout(() => {
          firstCard.isFaceUp = false;
          secondCard.isFaceUp = false;
          this.clickedCards = 0;
        }, 700);
      }
      this.flippedCards = [];
    }
  }

  protected drawCards() {
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].draw();
    }
  }

  protected clickCallback(event: MouseEvent) {
    const coords = (
      this.canvasElement as HTMLCanvasElement
    ).getBoundingClientRect();
    const x = event.clientX - coords.left;
    const y = event.clientY - coords.top;

    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].isCardClicked(x, y) && !this.cards[i].isFaceUp) {
        this.cards[i].isFaceUp = true;
        this.flippedCards.push(this.cards[i]);
        this.clickedCards++;
      }
    }
  }

  protected initTimer() {
    this.timer = setInterval(this.timerCallback, TIMEOUT_FOR_TIMER);
  }

  protected timerCallback() {
    --this._timeLeft;

    console.log(1);

    this.Events.emit(EVENTS_LIST.timeLeftChanged, { timeLeft: this._timeLeft });

    if (this._timeLeft === 0) {
      this.endGame(true);
    }
  }

  protected addClickListener() {
    (this.canvasElement as HTMLCanvasElement).addEventListener(
      'click',
      this.clickCallback
    );
  }

  protected removeClickListener() {
    (this.canvasElement as HTMLCanvasElement).removeEventListener(
      'click',
      this.clickCallback
    );
  }

  protected gameLoop() {
    this.drawCards();
    this.updateData();

    this.requestAnimationFunction = requestAnimationFrame(this.gameLoop);

    if (this._isGameFinished) {
      cancelAnimationFrame(this.requestAnimationFunction);
    }
  }

  public startGame() {
    this.drawBackground();
    this.createCards();
    this.gameLoop();
    this.initTimer();
    this.addClickListener();
  }

  public endGame(isTimeOut?: boolean) {
    clearInterval(this.timer);
    this.removeClickListener();
    this.timer = undefined;
    this._isGameFinished = true;
    this._timeLeft = 120;

    if (isTimeOut) {
      this.Events.emit(EVENTS_LIST.isTimeOut, { isTimeOut: true });
    }

    this.Events.emit(EVENTS_LIST.isGameFinishedFlagChanged, {
      isGameFinished: this._isGameFinished,
    });
  }

  public setCanvasElement(canvasElement: HTMLCanvasElement) {
    this.canvasElement = canvasElement;
    this.canvasContext = this.canvasElement.getContext(
      '2d'
    ) as CanvasRenderingContext2D;
  }

  public restartGame() {
    this._isGameFinished = false;

    this.Events.emit(EVENTS_LIST.gameRestarted);
    this.Events.emit(EVENTS_LIST.isGameFinishedFlagChanged, {
      isGameFinished: this._isGameFinished,
    });
  }

  public off<T>(event: string, callback: (...args: T[]) => void) {
    try {
      if (typeof event !== 'string') {
        console.warn('type of event is not string.');
        return;
      }
      if (!(callback instanceof Function)) {
        console.warn('type of callback is not function.');
        return;
      }

      this.Events.off(event, callback);
    } catch (error) {
      console.error(error);
    }

    return this;
  }

  public on<T>(event: string, callback: (...args: T[]) => void) {
    try {
      this.Events.on(event, callback);
    } catch (error) {
      console.error(error);
    }

    return this;
  }
}

export { Game };
