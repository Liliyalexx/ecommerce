

 import  { Component, Inject, OnInit }  from  '@angular/core';
 import  { TagService }  from  '../../service/tag.service';
 import  { Tag}  from  '../../modal/Modal';
 import  { MAT_DIALOG_DATA }  from  '@angular/material/dialog';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {
  tag: Tag = {} as Tag;
  progressBar = false;
  showProgressBar!: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private tagService: TagService) { }

  ngOnInit(): void {
    if (this.data.idTag != null) {
      this.tagService.findTagById(this.data.idTag).subscribe(tag => {
        this.tag = tag;
      })
    }
  }
  addTag() {
    this.showProgressBar = true;
    if (this.data.idTag != null) {
      this.tagService.editTag(this.tag, this.data.idTag).subscribe(tag => {
        this.tag = tag;
        window.location.reload();
      })
     } else {
      this.tagService.addTag(this.tag).subscribe(tag => {
        this.tag = tag;
        window.location.reload();
      })
    }
  }
}
