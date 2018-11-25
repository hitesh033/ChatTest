import { 
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  Renderer2, 
  HostListener 
} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  @ViewChild('userChatInput') chatInput: ElementRef;
  userChatInput;
  chatMsgs: any[] = [];
  currentDate: number = Date.now();
  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  showUserMsg() {
    //console.log(this.renderer.selectRootElement());
  }

  onEnter(chatInput) {
    this.chatMsgs.push(chatInput.value);
    chatInput.value = '';
  }
}
