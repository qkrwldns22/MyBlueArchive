// 모든 슬라이드를 가져옴
const slides = document.querySelectorAll('.v4_slide');

// nav 메뉴
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

$('.slick-wrapper').slick({
    slidesToShow: 5,      // 한 번에 보이는 슬라이드 수
    slidesToScroll: 1,    // 슬라이드 이동 개수
    autoplay: false,
    arrows: true,         // 화살표 표시
    centerMode: true,     // 중앙 슬라이드 강조
    focusOnSelect: true,  // 클릭 시 중앙으로 이동
    infinite: false,      // 무한 반복 사용 안 함
    variableWidth: true,  // 슬라이드 너비 고정
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '10%' // 모바일에서 여백 축소
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2, // 태블릿에서 2개
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '15%' // 태블릿에서 여백 설정
            }
        }
    ]
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
