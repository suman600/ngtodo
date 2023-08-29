import {Component, OnDestroy, OnInit} from '@angular/core';
import {Alert, Loader} from "../../core/todo.adaper";
import {Subscription} from "rxjs";
import {LoaderService} from "../../service/laoder.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy{
    show:boolean;
    title:string;
  subscription = new Subscription();

  constructor(private loaderService: LoaderService) {
    this.show = false;
    this.title = '';
  }

  ngOnInit(): void {
    this.subscription = this.loaderService.getLoader().subscribe((data) => {
      this.show = data.show
      this.title = data.title
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
