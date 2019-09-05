# case-user

> 课程直播

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

// 图片上传的时候在引入vux-upload插件之后，会只调用相机，如果希望也调用相册的话可以将源码的capture属性去掉

//图片裁剪使用的是vue-core-image-upload,手机端上传时会出现图片翻转的情况，故显示了翻转按钮，选择了本地裁剪上传模式，会修改一些源码。以下源码修改均为node_modules/vue-core-image-upload/dist目录下进行
1.npm install --save daycaca    https://www.javascriptcn.com/read-6569.html 一款基于canvas图片处理类库
2.crop.vue里注销掉了第17行  <!--<a class="g-resize" @touchstart.self="resize" @mousedown.self="resize"></a>--> 不允许用户缩放裁剪框
3.crop.vue里props新增添如下，默认为true
rotate:
{
  type: [Boolean],
  default: true,
}
4.vue-core-image-upload.vue文件第319,320行修改如下，如此修改是为解决图片上传时window.btoa不识别base64图片问题，限制本地裁剪上传时的图片type为png
type: this.crop === 'local' ? 'image/png' : this.files[0]['type'],
filename: this.crop === 'local' && this.files[0]['name'].indexOf('.png') < 0 ? this.files[0]['name'] + '.png' : this.files[0]['name'],
5.crop.vue文件中第341行daycaca.rotate2改为daycaca.rotate
6.vue-core-image-upload里的daycaca.rotate2都改为daycaca.rotate
