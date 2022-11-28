import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  stringJson: any;
  stringObject: any;
  courseList = [
    {
      courseid: "1",
      coursename: "Java programming",
      author: "Franc"
    },
    {
      courseid: "2",
      coursename: "Learn Typescript programming",
      author: "John"
    },
    {
      courseid: "3",
      coursename: "Learn Typescript programming",
      author: "John"
    }
  ];

  ngOnInit() {
    // Convert String obect to JSON
    this.stringJson = JSON.stringify(this.courseList);
    console.log("String json object :", this.stringJson);
    console.log("Type :", typeof this.stringJson);

    // ConvertjSON to an object
    this.stringObject = JSON.parse(this.stringJson);
    console.log("JSON object -", this.stringObject);
  }
}
