import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {


  links = [
    { label: 'Queue', icon: 'inbox', weblink: 'queue' },
    { label: 'Patient', icon: 'star', weblink: 'patient' },
    { label: 'Drugs', icon: 'send', weblink: 'drugs' },
    { label: 'Consultation', icon: 'drafts', weblink: 'doctor'},
    { label: 'Secretary', icon: 'person', weblink: 'secretary' },
    { label: 'Appointments', icon: 'person', weblink: 'appointments'},
    { label: 'Operations', icon: 'person', weblink: 'operations' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
