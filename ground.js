class Ground{
    //método construtor para definir as propriedades do objeto
        constructor(x,y,w,h){
            this.body = Bodies.rectangle(x,y,w,h);
            this.w = w;
            this.h = h;
            World.add(world,this.body);
        } 
    show(){
        //método show para exibir a forma do objeto
        var pose = this.body.position;
        rect(pose.x, pose.y, this.w, this.h);    
    }
}