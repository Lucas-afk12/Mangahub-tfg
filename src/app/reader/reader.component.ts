import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { TrueManga } from 'src/classes/Mangas';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  images:any[] = [];
  load:boolean = false

  constructor(private _route:ActivatedRoute,private http:HttpClient , private bottomSheet: MatBottomSheet) { }

  async ngOnInit() {
    let MangaID = this._route.snapshot.paramMap.get('MangaID');
    let chapterID = this._route.snapshot.paramMap.get('chapterID');
    console.log(MangaID)
    console.log(MangaID)
    await this.http.get(`http://localhost:3000/chapters/${MangaID}/${chapterID}`).subscribe((res:any) => {this.images=res;this.load=true;console.log(this.images)});

  }

  chapterlist = async() => {
    let MangaID = this._route.snapshot.paramMap.get('MangaID');
    await this.http.get(`http://localhost:3000/Mangas/${MangaID}`).subscribe((res:any)=>{
      const manga: TrueManga = new TrueManga(
        res.Datos,
        res.Personal,
        res.Tags,
        res.tipo,
        res.apiID,
        res._id
      );
      this.bottomSheet.open(BottomSheetComponent, {
        data: { manga }
      });
    })
  }


}
