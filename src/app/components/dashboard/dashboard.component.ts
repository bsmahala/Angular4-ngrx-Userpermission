import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	studentList = {"items":[{"studentUserId":8,"partnerId":1,"lastAccessTime":"2018-02-07T05:39:37.22","name":"Panda last","avatarURL":"http://envisionstudentprofileimage.s3-us-west-2.amazonaws.com/1_envisionstudentprofileimage1/10/2018%209:13:13%20PM?X-Amz-Expires=18000&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ4362SOHLLPH4BQQ/20180207/us-west-2/s3/aws4_request&X-Amz-Date=20180207T113938Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6cecff7256adc255039ae8c5b4d63c0201dafedd15fad6e7df41ce1e119f0118","company":"CP","profileId":7},{"studentUserId":8,"partnerId":1,"lastAccessTime":"2018-02-07T05:39:37.22","name":"Panda last","avatarURL":"http://envisionstudentprofileimage.s3-us-west-2.amazonaws.com/1_envisionstudentprofileimage1/10/2018%209:13:13%20PM?X-Amz-Expires=18000&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ4362SOHLLPH4BQQ/20180207/us-west-2/s3/aws4_request&X-Amz-Date=20180207T113938Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6cecff7256adc255039ae8c5b4d63c0201dafedd15fad6e7df41ce1e119f0118","company":"testfavpartner","profileId":7},{"studentUserId":8,"partnerId":1,"lastAccessTime":"2018-02-07T05:39:37.22","name":"Panda last","avatarURL":"http://envisionstudentprofileimage.s3-us-west-2.amazonaws.com/1_envisionstudentprofileimage1/10/2018%209:13:13%20PM?X-Amz-Expires=18000&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJ4362SOHLLPH4BQQ/20180207/us-west-2/s3/aws4_request&X-Amz-Date=20180207T113938Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6cecff7256adc255039ae8c5b4d63c0201dafedd15fad6e7df41ce1e119f0118","company":"DEV","profileId":7},{"studentUserId":2154,"partnerId":1,"lastAccessTime":"2018-02-06T22:57:38.397","name":"Robin gupta","avatarURL":null,"company":"CP","profileId":2143},{"studentUserId":2154,"partnerId":1,"lastAccessTime":"2018-02-06T22:57:38.397","name":"Robin gupta","avatarURL":null,"company":"testfavpartner","profileId":2143},{"studentUserId":2154,"partnerId":1,"lastAccessTime":"2018-02-06T22:57:38.397","name":"Robin gupta","avatarURL":null,"company":"DEV","profileId":2143}],"errorMessage":"","id":0,"token":"782F498D-33C6-4A4D-88E6-3FB9B4E42713","userId":2022,"partnerId":1,"userRoleData":null}
	dynamicWidth = 20;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	// document.querySelector('.item').style.width = '20%'
  }

}
