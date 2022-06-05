import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  private secret='token';
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return [
        {
          title: 'Todos los Mangas',
          cols: 2,
          rows: 1,
          image:
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b003f266787363.5b2216b70df77.png',
          url: '/home',
        },
        {
          title: 'Subir mangas',
          cols: 1,
          rows: 1,
          image:
            'https://i0.wp.com/xiahpop.com/wp-content/uploads/2020/03/1551097088_608074_1551097327_noticia_normal.jpg?resize=600%2C338&ssl=1',
          url: '/Pedidos',
        },
        {
          title: 'Mis mangas',
          cols: 1,
          rows: 1,
          image:
            'https://los40.com/los40/imagenes/2021/06/02/comics/1622622519_565457_1622622755_gigante_normal.jpg',
          url: '/Estadisticas',
        },
        {
          title: 'favoritos',
          cols: 2,
          rows: 1,
          image:
            'https://i.pinimg.com/originals/84/f5/53/84f5533218ae3fbc050349d5d1937d13.jpg',
          url: '/profile/favorites',
        }
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
  }
  
  goRoute(url: string) {
    console.log(url);
    this.router.navigateByUrl(url);
  }
}
