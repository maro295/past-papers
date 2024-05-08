function openSubject(subject) {
  var webViewer = document.getElementById('webViewer');
  switch (subject) {
    case 'physics':
      webViewer.innerHTML = '<iframe src="https://drive.google.com/embeddedfolderview?id=1V_fIJK1101iSlak7EEiBSKCM6g88pnTQ#grid" style="width: 100%; height: 500px; border: none;"></iframe>';
      break;
    case 'math':
      webViewer.innerHTML = '<iframe src="https://drive.google.com/embeddedfolderview?id=1f-hQujxLi2Yb7GrqLVc3i9lKt8tp8jNC#grid" style="width: 100%; height: 500px; border: none;"></iframe>';
      break;
    case 'chemistry':
      webViewer.innerHTML = '<iframe src="https://drive.google.com/embeddedfolderview?id=1U5nAcv5UXaPT0G3rDdp6IbLbq9oR8Lhd#grid" style="width: 100%; height: 500px; border: none;"></iframe>';
      break;
    default:
      break;
  }
}
