var vm = new Vue({
    el: "#app",
    data() {
        return {
            userid: "",
            username: "",
            userage: "",

            userlist: [{
                    id: '1',
                    name: "周星驰",
                    age: "55",
                    time: new Date()
                },
                {
                    id: '2',
                    name: "成龙",
                    age: "62",
                    time: new Date()
                },
                {
                    id: '3',
                    name: "李连杰",
                    age: "65",
                    time: new Date()
                },
                {
                    id: '4',
                    name: "吴京",
                    age: "36",
                    time: new Date()
                }
            ]
        }
    },
    methods: {
        add() {
            if (this.userid && this.username && this.userage) {
                this.userlist.push({
                    id: this.userid,
                    name: this.username,
                    age: this.userage,
                    time: new Date()
                })
                this.userid = this.username = this.userage = null;
            } else {
                alert("请填写完整！")
            }
        },
        del(listId) {
            // this.userlist.some((item, i) => {
            //     if (item.id === listId) {
            //         this.userlist.splice(i, 1);
            //         return true;
            //     }
            // })

            var index = this.userlist.findIndex(item => {
                if (item.id === listId) {
                    return true;
                }
            })
            this.userlist.splice(index, 1);
        }
    },
    mounted() {

    },
})