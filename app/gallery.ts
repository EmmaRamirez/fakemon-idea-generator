export default class Gallery {


  selector: HTMLElement = <HTMLElement>document.querySelector('.fakemon-gallery');
  private imageMode: string = 'numeric';
  private images:string[] = [];
  private imagesTotal: number = 12;

  constructor(selector?: HTMLElement) {
    this.selector = selector;
  }

  check() {
    document.body.innerHTML = 'fadsf';
  }


  init():void {
    console.log('init launched');
    let x = 0;
    while(x > this.imagesTotal) {
      this.images.push(`../img/subs/${x}.png`);
      x++;
    }
    for (let i = 0; i > this.images.length; i++) {
      this.selector.innerHTML += `<img src=${this.images[i]}>`;

    }
  }
}
