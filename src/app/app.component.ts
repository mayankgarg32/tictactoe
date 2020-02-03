import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "tictactoe";
  n = 1;
  winner;
  finished = 0;
  value() {
    if (this.n++ % 2 == 0) return "X";
    else return "O";
  }

  fillbox(a) {
    if (document.getElementById(a).innerHTML == "") {
      document.getElementById(a).innerHTML = `<h1>${this.value()}</h1>`;
      this.winchecker();
    }
  }

  winchecker() {
    if (this.n == 10 && this.finished == 0) {
      this.winner = "Game Drawn.";
      this.finished = 1;
    }
    if (
      document.getElementById("firstbox").innerHTML ==
        document.getElementById("secondbox").innerHTML &&
      document.getElementById("secondbox").innerHTML ==
        document.getElementById("thirdbox").innerHTML &&
      (document.getElementById("firstbox").innerHTML.slice(4, 5) == "X" ||
        document.getElementById("firstbox").innerHTML.slice(4, 5) == "O")
    ) {
      this.winner =
        document.getElementById("firstbox").innerHTML.slice(4, 5) +
        " wins the game";
      this.finished = 1;
    } else if (
      document.getElementById("fourthbox").innerHTML ==
        document.getElementById("fifthbox").innerHTML &&
      document.getElementById("fifthbox").innerHTML ==
        document.getElementById("sixthbox").innerHTML &&
      (document.getElementById("fourthbox").innerHTML.slice(4, 5) == "X" ||
        document.getElementById("fourthbox").innerHTML.slice(4, 5) == "O")
    ) {
      this.winner =
        document.getElementById("fourthbox").innerHTML.slice(4, 5) +
        " wins the game";
      this.finished = 1;
    } else if (
      document.getElementById("seventhbox").innerHTML ==
        document.getElementById("eighthbox").innerHTML &&
      document.getElementById("eighthbox").innerHTML ==
        document.getElementById("ninthbox").innerHTML &&
      (document.getElementById("seventhbox").innerHTML.slice(4, 5) == "X" ||
        document.getElementById("seventhbox").innerHTML.slice(4, 5) == "O")
    ) {
      this.winner =
        document.getElementById("seventhbox").innerHTML.slice(4, 5) +
        " wins the game";
      this.finished = 1;
    } else if (
      document.getElementById("firstbox").innerHTML ==
        document.getElementById("fourthbox").innerHTML &&
      document.getElementById("fourthbox").innerHTML ==
        document.getElementById("seventhbox").innerHTML &&
      (document.getElementById("firstbox").innerHTML.slice(4, 5) == "X" ||
        document.getElementById("firstbox").innerHTML.slice(4, 5) == "O")
    ) {
      this.winner =
        document.getElementById("firstbox").innerHTML.slice(4, 5) +
        " wins the game";
      this.finished = 1;
    } else if (
      document.getElementById("secondbox").innerHTML ==
        document.getElementById("fifthbox").innerHTML &&
      document.getElementById("fifthbox").innerHTML ==
        document.getElementById("eighthbox").innerHTML &&
      (document.getElementById("secondbox").innerHTML.slice(4, 5) == "X" ||
        document.getElementById("secondbox").innerHTML.slice(4, 5) == "O")
    ) {
      this.winner =
        document.getElementById("secondbox").innerHTML.slice(4, 5) +
        " wins the game";
      this.finished = 1;
    } else if (
      document.getElementById("thirdbox").innerHTML ==
        document.getElementById("sixthbox").innerHTML &&
      document.getElementById("sixthbox").innerHTML ==
        document.getElementById("ninthbox").innerHTML &&
      (document.getElementById("thirdbox").innerHTML.slice(4, 5) == "X" ||
        document.getElementById("thirdbox").innerHTML.slice(4, 5) == "O")
    ) {
      this.winner =
        document.getElementById("thirdbox").innerHTML.slice(4, 5) +
        " wins the game";
      this.finished = 1;
    } else if (
      document.getElementById("thirdbox").innerHTML ==
        document.getElementById("fifthbox").innerHTML &&
      document.getElementById("fifthbox").innerHTML ==
        document.getElementById("seventhbox").innerHTML &&
      (document.getElementById("thirdbox").innerHTML.slice(4, 5) == "X" ||
        document.getElementById("thirdbox").innerHTML.slice(4, 5) == "O")
    ) {
      this.winner =
        document.getElementById("thirdbox").innerHTML.slice(4, 5) +
        " wins the game";
      this.finished = 1;
    } else if (
      document.getElementById("firstbox").innerHTML ==
        document.getElementById("fifthbox").innerHTML &&
      document.getElementById("fifthbox").innerHTML ==
        document.getElementById("ninthbox").innerHTML &&
      (document.getElementById("firstbox").innerHTML.slice(4, 5) == "X" ||
        document.getElementById("firstbox").innerHTML.slice(4, 5) == "O")
    ) {
      this.winner =
        document.getElementById("firstbox").innerHTML.slice(4, 5) +
        " wins the game";
      this.finished = 1;
    }
  }

  reset() {
    this.finished = 0;
    document.getElementById("firstbox").innerHTML = "";
    document.getElementById("secondbox").innerHTML = "";
    document.getElementById("thirdbox").innerHTML = "";
    document.getElementById("fourthbox").innerHTML = "";
    document.getElementById("fifthbox").innerHTML = "";
    document.getElementById("sixthbox").innerHTML = "";
    document.getElementById("seventhbox").innerHTML = "";
    document.getElementById("eighthbox").innerHTML = "";
    document.getElementById("ninthbox").innerHTML = "";
  }
}
