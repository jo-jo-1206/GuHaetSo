function loadFile(event) {
  var imageShow = document.getElementById('image-show');
  // 이미지가 이미 존재한다면 삭제
  if (imageShow.querySelector('img')) {
    imageShow.removeChild(imageShow.querySelector('img'));
  }
  
  var image = document.createElement('img');
  image.src = URL.createObjectURL(event.files[0]);
  imageShow.appendChild(image);
}
