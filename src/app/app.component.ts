import { Component } from '@angular/core'; 
 
@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
  title = 'nemo-game'; 
  circles: any[] = []; 
  gameActive = true; 
  clicks = 0; 
  resultMessage = ''; 
 
  sharkImg = 'assets/error1.jpg'; 
  nemoImg = 'assets/nemo.jpg'; 
  backImg='assets/summer-6877_256.gif';
 
  ngOnInit() { 
    for (let i = 0; i < 10; i++) { 
      this.circles.push({ 
        element: null,  
        isNemo: Math.random() < 0.1   
      }); 
    } 
  } 
  refreshGame() {
    this.circles = [];
    this.gameActive = true;
    this.clicks = 0;
    this.resultMessage = '';
  
    for (let i = 0; i < 10; i++) {
      this.circles.push({
        element: null,
        isNemo: Math.random() < 0.1
      });
    }
  }
  
  onCircleClick(event:any,circle: any) { 
    if (!this.gameActive) return; 
 
    circle.element= event.target; 
 
    this.clicks++; 
 
    if (circle.isNemo) { 
      circle.element.style.backgroundImage = `url(${this.nemoImg})`; 
      this.gameActive = false;  
      this.resultMessage = 'Congratulations! You found Nemo in '+this.clicks +' clicks!'; 
    } else { 
      circle.element.style.backgroundImage = `url(${this.sharkImg})`;

      circle.element.style.backgroundColor = 'white'; 
    } 
 
    if (this.clicks >= 10) { 
      this.gameActive = false; 
      this.resultMessage = 'Sorry! You lost'; 
    } 
  } 
}
