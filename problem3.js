function Human(name, age) {

        this.name = name;
    
        this.age = age;
    
    };
    
    function Man(name) {
    
    };
    
    function check(){
    
        var obj = new Man("Tommy Tan");
    
        console.log(obj.name) 
    
        console.log(obj instanceof Human) 
    
    }
    
    check()