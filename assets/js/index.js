$(function(){

    /**메인비주얼 슬라이드 */
    const groupSlide = new Swiper('.group-slide',{
        loop:true,
        speed:500,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
        pagination:{
            el:'.swiper-pagination',
            type: 'fraction'
        },
    })
    /**메인컨텐츠 바둑슬라이드 */
    const goSlide = new Swiper('.go-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**메인컨텐츠 스터디슬라이드 */
    const studySlide = new Swiper('.study-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:1.3,
    })
    /**메인컨텐츠 gpt슬라이드 */
    const gptSlide = new Swiper('.gpt-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**메인컨텐츠 free슬라이드 */
    const freeSlide = new Swiper('.free-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**메인컨텐츠 brand슬라이드 */
    const brandSlide = new Swiper('.brand-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**메인컨텐츠 luck슬라이드 */
    const luckSlide = new Swiper('.luck-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**banner슬라이드 슬라이드 */
    const bannerSlide = new Swiper('.banner-slide',{
        loop:true,
        speed:1500,
        autoplay:{
            delay: 3000,
            disableOnInteraction: false
        },
        pagination:{
            el:'.swiper-pagination'
        },
    })
    /**메인컨텐츠 promotion슬라이드 */
    const promotionSlide = new Swiper('.promotion-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:'auto'
    })
    /**메인컨텐츠 high슬라이드 */
    const highSlide = new Swiper('.high-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:3,
    })
    /**메인컨텐츠 open슬라이드 */
    const openSlide = new Swiper('.open-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**메인컨텐츠 weekend슬라이드 */
    const weekendSlide = new Swiper('.weekend-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**메인컨텐츠 oneday슬라이드 */
    const onedaySlide = new Swiper('.oneday-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**메인컨텐츠 wishlist슬라이드 */
    const wishlistSlide = new Swiper('.wishlist-slide',{
        speed:500,
        spaceBetween:15,
        slidesPerView:2.1,
    })
    /**왼쪽 숨김메뉴 열기 */
    $('.header .menu').click(function(){
        $('.group-side').addClass('on');
        $('body').addClass('hidden');
    })
    /**왼쪽 숨김메뉴 열린 부분 외 클릭시 닫기 */
    $('html').click(function(e){
        if($(e.target).hasClass('hidden')) {
            $('.group-side').removeClass('on');
            $('body').removeClass('hidden');
        }
    })
    /**오른쪽 숨김메뉴 열기 */
    $('.header .search').click(function(){
        $('.group-search').addClass('on');
        $('body').addClass('hidden');
    })
    /**오른쪽 숨김메뉴 닫기 */
    $('.group-search .btn-del').click(function(){
        $('.group-search').removeClass('on');
        $('body').removeClass('hidden');
    })
    /**tab-전체카테고리 열기 */
    $('.group-tab .cate').click(function(e){
        e.preventDefault();
        $('.group-allcategory').addClass('on');
        $('.group-tab .tab.cate').addClass('active').parent().siblings().children().removeClass('active');
    })
    /**왼쪽 숨김메뉴-전체카테고리 열기 */
    $('.group-side .side.cate').click(function(e){
        e.preventDefault();
        $('.group-side').removeClass('on');
        $('body').removeClass('hidden');
        $('.group-allcategory').addClass('on');
        $('.group-tab .tab.cate').addClass('active').parent().siblings().children().removeClass('active');
    })
    
    
































})