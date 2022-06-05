import { Component, OnInit } from '@angular/core';
import { BottomSheetComponent } from '../../bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { HttpClient } from '@angular/common/http';
import { TrueManga } from '../../../classes/Mangas'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  trueMangaArr: TrueManga[] = [];
  filterValue: string;
  load:boolean = false

  constructor(private http: HttpClient, private bottomSheet: MatBottomSheet) {}

  ngOnInit() {
    this.http
      .get<TrueManga[]>('http://localhost:3000/mangas')
      .subscribe((res: any) => {
        console.log(res)
        res.forEach((manga: any) => {
          const object: TrueManga = new TrueManga(
            manga.Datos,
            manga.Personal,
            manga.Tags,
            manga.tipo,
            manga.apiID,
            manga._id
          );
          this.trueMangaArr.push(object);
          this.load=true
        });
      });
  }

  leer(manga: TrueManga): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: { manga },
    });
  }

  handleSearch(value: string) {
    this.filterValue = '';
    if (value) this.filterValue = value;
  }

}
