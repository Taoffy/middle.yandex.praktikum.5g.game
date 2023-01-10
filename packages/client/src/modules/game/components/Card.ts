class Card {
  public x: number;
  protected y: number;
  protected size: number;
  protected face: string;
  protected canvasElement: HTMLCanvasElement;
  protected isFaceUp: boolean;
  protected isMatch: boolean;

  constructor(x, y, face, canvasElement) {
    this.x = x;
    this.y = y;
    this.size = 70;
    this.face = face;
    this.canvasElement = canvasElement;
    this.isFaceUp = false;
    this.isMatch = false;
  }

  public draw() {
    const canvasContext = this.canvasElement.getContext('2d')!;

    canvasContext.fillStyle = '214, 247, 202';
    canvasContext.lineWidth = 2;
    canvasContext.roundRect(this.x, this.y, this.size, this.size);
    canvasContext.fill();
  }

  public isCardClicked(x: number, y: number) {
    return x >= this.x && x <= this.x + this.size &&
      y >= this.y && y <= this.y + this.size;
  }
}

export { Card };
