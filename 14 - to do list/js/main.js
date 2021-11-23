const Main = {
    init (){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors(){
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        
        
        
    },

    bindEvents(){
        this.$checkButtons.forEach(button => {
            button.addEventListener('click', this.Events.checkButton_click)
        })

        this.$inputTask.addEventListener('keypress', this.Events.addTask.bind(this))
        
    },

    Events: {
        checkButton_click(e){
           const el = e.target
           const isDone = el.parentElement.classList.contains('done')
           

           if(!isDone){
           return el.parentElement.classList.add('done')
           } 
           el.parentElement.classList.remove('done')
        },
        addTask(e){
            if(e.key === 'Enter'){
                const value = e.target.value
                const ul = document.querySelector('#list')
                const li = document.createElement('li')
                const div = document.createElement('div')
                const label = document.createElement('label')
                const button = document.createElement('button')
                div.classList.add('check')
                label.classList.add('task')
                label.innerText = `${value}`
                button.classList.add('remove')
                li.appendChild(div)
                li.appendChild(label)
                li.appendChild(button)
                ul.appendChild(li)

                e.target.value = ''
                this.cacheSelectors()
                this.bindEvents()
            }
        }
    }

}

Main.init()

