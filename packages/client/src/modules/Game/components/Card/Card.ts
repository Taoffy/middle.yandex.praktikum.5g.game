import { TCard } from './types';

class Card {
  protected x: number;
  protected y: number;
  protected size: number;
  protected color: string;
  protected canvasContext: CanvasRenderingContext2D;
  protected _isFaceUp: boolean;
  protected _isMatch: boolean;

  constructor({ x, y, color, canvasContext }: TCard) {
    this.x = x;
    this.y = y;
    this.size = 70;
    this.color = color;
    this.canvasContext = canvasContext;
    this._isFaceUp = false;
    this._isMatch = false;

    this.draw = this.draw.bind(this);
    this.isCardClicked = this.isCardClicked.bind(this);
  }

  public draw() {
    if (this._isMatch) {
      return;
    }

    if (this._isFaceUp) {
      this.canvasContext.fillStyle = this.color;
      this.canvasContext.lineJoin = 'round';
      this.canvasContext.strokeStyle = 'black';
      this.canvasContext.strokeRect(this.x, this.y, this.size, this.size);
      this.canvasContext.fillRect(this.x, this.y, this.size, this.size);
    } else {
      this.canvasContext.fillStyle = 'rgb(214, 247, 202)';
      this.canvasContext.lineJoin = 'round';
      this.canvasContext.strokeStyle = 'black';
      this.canvasContext.strokeRect(this.x, this.y, this.size, this.size);
      this.canvasContext.fillRect(this.x, this.y, this.size, this.size);
    }
  }

  public isCardClicked(x: number, y: number) {
    return (
      x >= this.x &&
      x <= this.x + this.size &&
      y >= this.y &&
      y <= this.y + this.size
    );
  }

  get isMatch() {
    return this._isMatch;
  }

  set isMatch(isMatch) {
    this._isMatch = isMatch;
  }

  get isFaceUp() {
    return this._isFaceUp;
  }

  set isFaceUp(isFaceUp) {
    this._isFaceUp = isFaceUp;
  }

  get cardColor() {
    return this.color;
  }
}

export { Card };
