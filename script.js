// 모든 슬라이드를 가져옴
const slides = document.querySelectorAll('.v4_slide');

//nav 메뉴
document.addEventListener("DOMContentLoaded", () => {
    const gnbWrapper = document.querySelector(".gnb_wrapper");
    const fulldownBg = document.querySelector(".fulldown_bg");

    if (!gnbWrapper || !fulldownBg) {
        console.error("gnb_wrapper 또는 fulldown_bg를 찾을 수 없습니다.");
        return;
    }

    // 드롭다운 표시
    const showDropdown = () => {
        fulldownBg.classList.add("active");
    };

    // 드롭다운 숨김
    const hideDropdown = () => {
        fulldownBg.classList.remove("active");
    };

    // 드롭다운 유지 조건
    const handleMouseLeave = (event) => {
        const isOutsideGnb =
            !gnbWrapper.contains(event.relatedTarget) &&
            !fulldownBg.contains(event.relatedTarget);

        if (isOutsideGnb) {
            hideDropdown();
        }
    };

    // 이벤트 추가
    gnbWrapper.addEventListener("mouseover", showDropdown);
    fulldownBg.addEventListener("mouseover", showDropdown);

    gnbWrapper.addEventListener("mouseout", handleMouseLeave);
    fulldownBg.addEventListener("mouseout", handleMouseLeave);
});


// 초기 설정: slide1의 배경색을 변경된 상태로 시작
slides[0].querySelector('.circle_background').style.backgroundColor = '#019fe8';

slides.forEach(slide => {
    slide.addEventListener('click', function() {
        // 먼저 모든 슬라이드의 circle_background를 기본 색상으로 초기화
        slides.forEach(s => {
            s.querySelector('.circle_background').style.backgroundColor = '#000000';
        });

        // 클릭한 슬라이드의 배경색을 변경
        const circleBackground = this.querySelector('.circle_background');
        circleBackground.style.backgroundColor = '#019fe8';
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.v4_slide');
  const contentTabs = document.querySelectorAll('.character_content_tab');

  function updateContent(index) {
      contentTabs.forEach(tab => {
          if (tab.getAttribute('data-index') === index) {
              tab.style.display = 'block'; // 해당 탭을 보이게
          } else {
              tab.style.display = 'none'; // 다른 탭은 숨기기
          }
      });
  }

  slides.forEach(slide => {
      slide.addEventListener('click', function () {
          const index = this.getAttribute('data-index');
          updateContent(index); // 슬라이드 클릭 시 텍스트 탭 갱신
      });
  });

  // 초기 상태로 첫 번째 슬라이드를 활성화 상태로 설정
  updateContent('0'); // 처음엔 index 0의 내용을 보이게 설정
});

// 이미지 슬라이더
let currentIndex = 0;  // 슬라이드 인덱스
const sliderItems = document.querySelectorAll('.b_slide'); // 모든 슬라이드 항목
const prevButton = document.querySelector('.b_swiper_prev'); // prev 버튼
const nextButton = document.querySelector('.b_swiper_next'); // next 버튼

// 슬라이드를 업데이트하는 함수
function updateSlider() {
    // 모든 슬라이드를 숨기고, 현재 슬라이드만 보이도록 설정
    sliderItems.forEach(slide => slide.style.display = 'none');
    sliderItems[currentIndex].style.display = 'block'; // 현재 슬라이드만 보이도록 설정

    // 버튼 활성화/비활성화 상태 업데이트
    if (currentIndex === 0) {
        prevButton.classList.add('swiper-button-disabled'); // 첫 번째 슬라이드에서 prev 버튼 비활성화
    } else {
        prevButton.classList.remove('swiper-button-disabled');
    }

    if (currentIndex === sliderItems.length - 1) {
        nextButton.classList.add('swiper-button-disabled'); // 마지막 슬라이드에서 next 버튼 비활성화
    } else {
        nextButton.classList.remove('swiper-button-disabled');
    }
}

// prev 버튼 클릭 시
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // 이전 슬라이드로 이동
        updateSlider();
    }
});

// next 버튼 클릭 시
nextButton.addEventListener('click', () => {
    if (currentIndex < sliderItems.length - 1) {
        currentIndex++; // 다음 슬라이드로 이동
        updateSlider();
    }
});

// 초기 상태 업데이트
updateSlider();

// #top_btn 클릭 시 페이지 맨 위로 스크롤
document.getElementById("top_btn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 부드럽게 스크롤되도록 설정
    });
});
