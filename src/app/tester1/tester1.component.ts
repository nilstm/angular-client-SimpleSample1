import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../services/consumer.service';

@Component({
  templateUrl: './tester1.component.html',
  styleUrls: ['./tester1.component.sass']
})
export class Tester1Component implements OnInit {
  public names: string[] = [];

  constructor(private svc: ConsumerService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.svc
      .getNames()
      .subscribe({ next: svcNames => (this.names = svcNames) });
  }
}
