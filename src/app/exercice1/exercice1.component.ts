import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public title = "interpolation";
  public color = "blue";

  public changeColor(color: string): void {
    this.color = color;
  }

  constructor() {}

  ngOnInit(): void {}
}
