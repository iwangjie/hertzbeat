import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-data-vines-dashboard',
  templateUrl: './data-vines.component.html',
  styleUrls: ['./data-vines.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataVinesDashboardComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    // 可以添加一些初始化逻辑，如果需要的话
  }

  ngOnDestroy(): void {
    // 可以添加一些清理逻辑，如果需要的话
  }
}
