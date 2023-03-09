$(document).ready(function () {
  // console.log($('.item:nth-child(2) .inner-item').html());
  /**On document ready the changeGrid function does not require window reload */
  $(window).on('load', function () {
    setTimeout(() => {
      var width = $(window).width();
      if (width > 1000) {
        $('#job-info .row').removeAttr('data-masonry style');
        $('.item').removeAttr('style');
      } else if (width < 1000) {
        $('#job-info .row').attr('data-masonry', '{"percentPosition": true }');
        swapContent();
      }
    });
  });

  /**Call changeGrid function on window resize event */
  $(window).resize(function () {
    location.reload();
    $(window).on('load', function () {
      setTimeout(() => {
        changeGrid();
      }, 2000);
    });
  });
});

// if the device is table or moble, add data-masonry
// else remove data-masonry
function changeGrid() {
  var width = $(window).width();
  if (width > 1000) {
    $('#job-info .row').removeAttr('data-masonry style');
    $('.item').removeAttr('style');
    location.reload();
  } else if (width < 1000) {
    $('#job-info .row').attr('data-masonry', '{"percentPosition": true }');
    swapContent();
    location.reload();
  }
}

// swap html content between two divs if the device is tablet or mobile
function swapContent() {
  var masonryOptions = {
    itemSelector: '.item',
  };

  // initialize Masonry
  var $grid = $('#job-info .row').masonry(masonryOptions);

  swap(
    $('.item:nth-child(2) .inner-item'),
    $('.item:nth-child(3) .inner-item')
  );
  swap(
    $('.item:nth-child(4) .inner-item'),
    $('.item:nth-child(6) .inner-item')
  );

  $grid.masonry(masonryOptions); // re-initialize
}

// function for swapping html content between first div and second div
function swap(first, second) {
  var temp = first.html();
  first.html(second.html());
  second.html(temp);
}
