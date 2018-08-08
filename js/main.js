$('.hobbies i').on('mouseenter', (e) => {
    $(e.currentTarget.nextSibling).toggleClass('show')
})
$('.hobbies i').on('mouseleave', (e) => {
    $(e.currentTarget.nextSibling).toggleClass('show')
})