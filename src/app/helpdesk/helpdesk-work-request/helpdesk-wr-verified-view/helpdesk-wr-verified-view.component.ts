import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-helpdesk-wr-verified-view',
  templateUrl: './helpdesk-wr-verified-view.component.html',
  styleUrls: ['./helpdesk-wr-verified-view.component.scss']
})
export class HelpdeskWrVerifiedViewComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        height: '300px',
        width: '100%',
        thumbnailsColumns: 4,
        thumbnailsRemainingCount: true
      }
    ];

    this.galleryImages = [
      {
        small: 'http://4.bp.blogspot.com/-eP1VgURmEMk/UHpnu14WKcI/AAAAAAAAAZ4/HzpSYTh-M8U/s1600/DSCN5868.JPG',
        medium: 'http://4.bp.blogspot.com/-eP1VgURmEMk/UHpnu14WKcI/AAAAAAAAAZ4/HzpSYTh-M8U/s1600/DSCN5868.JPG',
        big: 'http://4.bp.blogspot.com/-eP1VgURmEMk/UHpnu14WKcI/AAAAAAAAAZ4/HzpSYTh-M8U/s1600/DSCN5868.JPG'
      },
      {
        small: 'http://3.bp.blogspot.com/-UPmCIlhHP1k/UHpmpxR9kqI/AAAAAAAAAZw/SDMRXWpblcY/s1600/DSCN5857.JPG',
        medium: 'http://3.bp.blogspot.com/-UPmCIlhHP1k/UHpmpxR9kqI/AAAAAAAAAZw/SDMRXWpblcY/s1600/DSCN5857.JPG',
        big: 'http://3.bp.blogspot.com/-UPmCIlhHP1k/UHpmpxR9kqI/AAAAAAAAAZw/SDMRXWpblcY/s1600/DSCN5857.JPG'
      },
      {
        small: 'http://3.bp.blogspot.com/-mfucGQcW8qk/UHppSn3DUlI/AAAAAAAAAaA/KCJKRS4EWCw/s1600/DSCN5869.JPG',
        medium: 'http://3.bp.blogspot.com/-mfucGQcW8qk/UHppSn3DUlI/AAAAAAAAAaA/KCJKRS4EWCw/s1600/DSCN5869.JPG',
        big: 'http://3.bp.blogspot.com/-mfucGQcW8qk/UHppSn3DUlI/AAAAAAAAAaA/KCJKRS4EWCw/s1600/DSCN5869.JPG'
      },
      {
        small: 'http://3.bp.blogspot.com/-dgGWdPwpmvg/UHpp-U1yu4I/AAAAAAAAAaI/QIJgxKZqLMw/s1600/DSCN5870.JPG',
        medium: 'http://3.bp.blogspot.com/-dgGWdPwpmvg/UHpp-U1yu4I/AAAAAAAAAaI/QIJgxKZqLMw/s1600/DSCN5870.JPG',
        big: 'http://3.bp.blogspot.com/-dgGWdPwpmvg/UHpp-U1yu4I/AAAAAAAAAaI/QIJgxKZqLMw/s1600/DSCN5870.JPG'
      },
      {
        small: 'http://2.bp.blogspot.com/-TL4AuU5B-oc/UHps-KvAMrI/AAAAAAAAAag/FLj_m8XXLGg/s1600/DSCN5876.JPG',
        medium: 'http://2.bp.blogspot.com/-TL4AuU5B-oc/UHps-KvAMrI/AAAAAAAAAag/FLj_m8XXLGg/s1600/DSCN5876.JPG',
        big: 'http://2.bp.blogspot.com/-TL4AuU5B-oc/UHps-KvAMrI/AAAAAAAAAag/FLj_m8XXLGg/s1600/DSCN5876.JPG'
      }
    ];
  }

}
