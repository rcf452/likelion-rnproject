import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Inputbox';
import Todoitem from './app/components/Todoitem';
import SuccessItem from './app/components/SuccessItem';

//deadLine 1, 2, 3 따로따로 구현한 거임다.

export default class App extends React.Component {
  constructor(props){ 
    super(props);
    this.state={
      inputValue: "", 
      todos:[],
      success:[],
      // deadLine1: 0,
      // deadLine2: 0,
      // deadLine3: 0,
      score: 0,
    }
  };

  // componentDidMount(){ // 앱키면 정보가져와서 리스트 정리
  //   AsyncStorage.getItem('@todos4:state').then((state)=>{
  //     if(state !== null) {
  //       this._checktime()
  //     }
  //   })
  // }

  componentWillMount(){
    this.getData()
  }
  
  storeData=() => {
    AsyncStorage.setItem('@todos6:state', JSON.stringify(this.state));
  }

  getData=() => {
    AsyncStorage.getItem('@todos6:state').then((state)=>{
      if(state !== null) {
        this.setState(JSON.parse(state));
      }
    })
  }


  _makeTodoItem = ({ item, index }) => {
    return (
      <Todoitem text={item.title}
                isComplete={item.isComplete}
                changeComplete={() => { //체크버튼 누를시
                  
                  // var now = new Date() 
                  const newTodo = [...this.state.todos]; //현재 todolist
                  const newSuccess = [...this.state.success]; //성공했을시 저장될 list
                  let score = this.state.score; // 성공여부에 따른 호감도 score
                  // let dl1 = this.state.deadLine1; //첫번째 todo의 deadline
                  // let dl2 = this.state.deadLine2; //두번째 todo의 deadline
                  // let dl3 = this.state.deadLine3; //세번째 todo의 deadline
                  // let indexdl;
                  
                  // if(index==0){ indexdl = dl1; }
                  // else if(index==1){ indexdl = dl2; }
                  // else if(index==2){ indexdl = dl3; }


                //   if(((now.getTime() - indexdl)/(1000*60*60))<=24){ //24시간 내에 성공하면 알람띄우고 삭제

                //     newTodo[index].isComplete = !newTodo[index].isComplete;
                //     alert("수고했고 리스트 삭제");
                //     this.setState({success:newSuccess.concat(newTodo[index]), score:score+1}, this.storeData) //성공리스트 넘기고
                //     newTodo.splice(index,1);
                //     this._changeindex({index});

                //   } else { //실패해도 알람띄우고 삭제

                //     this._changeindex({index});
                //     alert("마감시간이 지났습니다. 리스트에서 삭제합니다.")
                //     this.setState({score:score-1}, this.storeData) //
                //     newTodo.splice(index,1);
                //   }
                  
                //   this.setState({todos:newTodo}, this.storeData);
                // 
                    newTodo[index].isComplete = !newTodo[index].isComplete;
                    alert("리스트 삭제");
                    this.setState({success:newSuccess.concat(newTodo[index]), score:score+1}, this.storeData) //성공리스트 넘기고
                    newTodo.splice(index,1);
                    this.setState({todos:newTodo}, this.storeData);
                }}

                  
                deleteItem={() => {
                  const newTodo = [...this.state.todos];
                  let score = this.state.score;

                  newTodo.splice(index,1);
                  // this._changeindex({index});
                  this.setState({todos:newTodo}, this.storeData); //삭제시 todolist와 score 조정

                  // if(index==0){
                  //   this.setState({deadLine1:0}, this.storeData);
                  // }
                }}
               
                />
    );
  }

 
  _renderSuccess = ({ item, index }) => {
    return (
      <SuccessItem text={item.title}/>
    );
  }


  // _checktime = () => { //리스트의 deadline 확인 후 지나면 alert와 함께 삭제, 앱 시작시 실행함수
    
  //   var now = new Date()
  //   const newTodo = [...this.state.todos];
  //   let dl1 = this.state.deadLine1;
  //   let dl2 = this.state.deadLine2;
  //   let dl3 = this.state.deadLine3;
  //   let score = this.state.score;

  //   if(dl3!=0&&((now.getTime() - dl3)/(1000*60*60))>24){ //시간이 24시간이 지났을 경우 - 3번째 todo
  //     alert("시간이 넘어서 리스트에서 삭제됩니다")
  //     newTodo.splice(2,1);
  //     score = score-3
  //     dl3 = 0; 
  //   }

  //   if(dl2!=0&&((now.getTime() - dl2)/(1000*60*60))>24){ //2번째 todo
  //     alert("시간이 넘어서 리스트에서 삭제됩니다")
  //     newTodo.splice(1,1);
  //     score=score-3;
  //     dl2= dl3;
  //     dl3 = 0;
  //   }

  //   if(dl1!=0&&((now.getTime() - dl1)/(1000*60*60))>24){ //1번째 todo
  //     alert("시간이 넘어서 리스트에서 삭제됩니다");
  //     newTodo.splice(0,1);
  //     score = score-3;
  //     dl1= dl2;
  //     dl2= dl3;
  //     dl3 = 0;
      
  //   }

  //   this.setState({todos:newTodo, deadLine1:dl1, deadLine2:dl2, deadLine3:dl3, score:score}, this.storeData)
  // }

  // _changeindex = ({index}) =>{ // deadline과 todo 순서 맞추기
  //   let dl1 = this.state.deadLine1;
  //   let dl2 = this.state.deadLine2;
  //   let dl3 = this.state.deadLine3; 

  //   if(index == 0){
  //     dl1= dl2;
  //     dl2= dl3;
  //     dl3 = 0;
      
  //   }
  //   if(index == 1){
  //     dl2= dl3;
  //     dl3 = 0;
      
  //   }
  //   if(index == 2){
  //     dl3 = 0; 
      
  //   }
  //   this.setState({deadLine1:dl1, deadLine2:dl2, deadLine3:dl3}, this.storeData);
  // }

  _changeText = (value) => {
    this.setState({inputValue: value}, this.storeData);
  }

  _addTodoItem = () => {
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos;
      const newTodo = {title: this.state.inputValue, isComplete:false};

      // var date = new Date();
      // var dateTime = date.getTime();
      
      this.setState({inputValue: '', todos: prevTodo.concat(newTodo)}, this.storeData)
      // if(prevTodo[0] == null){ // 새로 목표 설정할때 deadline에 시간저장
      //   this.setState({
      //     inputValue: '',
      //     todos: prevTodo.concat(newTodo),
      //     deadLine1: dateTime,
      //   }, this.storeData)
      // } else if(prevTodo[1] == null){
      //   this.setState({
      //     inputValue: '',
      //     todos: prevTodo.concat(newTodo),
      //     deadLine2: dateTime,
      //   }, this.storeData)
      // } else {
      //   this.setState({
      //     inputValue: '',
      //     todos: prevTodo.concat(newTodo),
      //     deadLine3: dateTime,
      //   }, this.storeData)
      // }
      
    }
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.headercentered}>
          <Header/>
        </View>
  
        <View style={styles.subContainer}>
          <Subtitle title="입력란"/>
          <Input value = {this.state.inputValue} //이 부분을 들고 inputbox.js로 넘어감
                 changeText={this._changeText}
                 addTodo={this._addTodoItem}/>
        </View>
  
        <View style={styles.subContainer}>
          <Subtitle title = "목록란"/>

          <FlatList data={this.state.todos}
                    renderItem={this._makeTodoItem}
                    keyExtractor={(index, item) => {return console.log(index)}}
                     />
        
        </View>

        <View style={styles.subContainer}>
          <Subtitle title = "성공란"/>
          <Subtitle title = {this.state.score}/>
          <FlatList data={this.state.success}
                    renderItem={this._renderSuccess}
                    keyExtractor={(item) => {return console.log(item)}}
                     />
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center', 가로 가운데 정렬
    //justifyContent: 'center', 세로 가운데 정렬
  },
  headercentered: {
    alignItems : 'center',
    marginTop : 50,
  },
  subContainer: {
    marginLeft: 20,
  },
});
