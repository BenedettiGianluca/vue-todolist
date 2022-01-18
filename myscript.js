var V = new Vue({
    el: '#Vue',
    data: {
        toDoList: [
            {
                text: 'Quarterly Newsletter',
                done: true
            },
            {
                text: 'Recruiting blog post',
                done: true
            },
            {
                text: 'Mobile app launch',
                done: true
            },
            {
                text: 'Interview John H.',
                done: false
            },
            {
                text: 'Summit update to mobile storefronts',
                done: true
            },
            {
                text: 'Schedule meeting with Alex',
                done: false
            },
            {
                text: 'Homepage refresh',
                done: true
            },
            {
                text: 'Onboard new Sales team members',
                done: true
            },
            {
                text: 'Review editorial calendar',
                done: true
            }
        ]
    },
    methods: {
        aggiungiCompito: function(){
            scriviCompito = document.querySelector('.scriviCompito').value;
            nuovoCompito = {
                text: scriviCompito,
                done: false
            }
            V.toDoList.push(nuovoCompito);
        },
        rimuoviCompito: function(){
            compito = event.target.parentNode;
            compito.remove();
        },
        trueFalse: function(){
            compito = event.target;
            x = 0;
            if ((compito.style.textDecoration == 'line-through')&&(x==0)){
                compito.style.textDecoration = 'none';
                x = 1;
            }
            if ((compito.style.textDecoration == 'none')&&(x==0)){
                compito.style.textDecoration = 'line-through';
                x = 1;
            }
        }
    }
});