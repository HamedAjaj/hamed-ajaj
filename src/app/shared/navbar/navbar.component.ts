import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isActive: boolean = false;
  isOpen: boolean = false;

  constructor(private elementRef: ElementRef){}
  
  toggleMenu(): void {
    this.isActive = !this.isActive;
    this.isOpen = !this.isOpen;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const toggleBtn = this.elementRef.nativeElement.querySelector('.toggle-menu');
    const links = this.elementRef.nativeElement.querySelector('.links');

  if (links.contains(target)) {
    this.toggleMenu();
  } else if (!toggleBtn.contains(target)) {
    this.isActive = false;
    this.isOpen = false;
  }
}
}

/* document.addEventListener("click",(e)=>{
  if(links.classList.toggle("open")){
    togglebtn?.classList.toggle("active");
    links?.classList.toggle("open");
  }
}) */