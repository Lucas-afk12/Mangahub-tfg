import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheet,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { HttpClient } from '@angular/common/http';
import { TrueManga } from '../../classes/Mangas';
import { Router } from '@angular/router';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
})
export class BottomSheetComponent implements OnInit {
  trueManga: TrueManga;
  chapters: any[];
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  private user: any;
  isFavorite: Boolean = false;
  load: Boolean = false;
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public manga: any,
    private http: HttpClient,
    private router: Router,
    private sheet: MatBottomSheet
  ) {}

  async ngOnInit() {
    let token = localStorage.getItem('token');
    console.log(this.trueManga);
    this.trueManga = this.manga.manga;
    console.log(this.trueManga.id)
    await this.http
      .get(`http://localhost:3000/chapters/${this.trueManga.id}`)
      .subscribe( async(res: any) => {
        this.chapters = res.chapter.flat();
        console.log(this.manga);
        console.log(this.chapters);
        this.chapters.sort((a, b) => {
          return a.chapter - b.chapter;
        });
        console.log(this.chapters);
        await this.http
      .get(`http://localhost:3000/tokenUser/${token}`)
      .subscribe((user: any) => {
        this.user = user;
        user.favs.forEach((mangaID: number) => {
          if (mangaID == this.trueManga.id) {
            this.isFavorite = true;
          }
        });
        return this.load = true
      });
      });
  }

  favourite = async () => {
    console.log(this.user)
    console.log(this.isFavorite)
      if (!this.isFavorite){
        this.isFavorite = !this.isFavorite
       return await this.http.post('http://localhost:3000/favourite/add',{'mangaId':this.trueManga.id, 'userID':this.user._id}).subscribe(res => {return console.log(res)})
      }else{
        this.isFavorite = !this.isFavorite
        return await this.http.post('http://localhost:3000/favourite/remove',{'mangaId':this.trueManga.id, 'userID':this.user._id}).subscribe(res => {return console.log(res)})
      }
      return 
  }

  read = async (chapter: string) => {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() =>
        this.router.navigateByUrl(`/reader/${this.trueManga.apiID}/${chapter}`)
      );
    this.sheet.dismiss();
  };
}
