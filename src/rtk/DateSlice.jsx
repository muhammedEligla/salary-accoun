import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';


const today = moment().date()
const date = moment().format('l');

const lastMonth = ()=> {
    // Get the current date
    let currentDate = moment();
    
    // Navigate to the last month
    currentDate = currentDate.subtract(1, 'month');
    
    // Get the end of the month
    let lastDayOfLastMonth = currentDate.endOf('month');
    
    return lastDayOfLastMonth.format('DD'); // Format the date as needed
}


function getDateOfLastMonth() {
  // Get the current date
  let currentDate = moment();

  // Subtract one month from the current date
  let lastMonthDate = currentDate.subtract(1, 'months');

  // Get the year of the last month
  let lastMonthYear = lastMonthDate.year();

  return` ${lastMonthDate.month() + 1} / ${lastMonthYear} `
  // Return the date of the last month including the year
  // return {
  //     month: lastMonthDate.month() + 1, // Adding 1 to get the month number starting from 1
  //     year: lastMonthYear
  // };
}



const initialState = {
    today: today,
    hourwork:8,
    extra:0,
    dobleExtra:0,
    absence:0,
    salary:17002,
    monthAgo:[],
    list:[],
}

const DateSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addExtra(state, action) {
      state.extra += action.payload

      if(action.payload !== 0){
        const listOb = {
          value:action.payload,
          type:'x1.5 اضافي ',
          date:date
        }
        state.list.unshift(listOb)
      }
    },
    addDoble(state, action) {
      state.dobleExtra += action.payload

      if(action.payload !== 0){
        const listOb = {
          value:action.payload,
          type:'x2 اضافي ',
          date:date
        }
        state.list.unshift(listOb)
      }
    },
    removeH(state, action){
        state.absence += action.payload

        if(action.payload !== 0){
          const listOb = {
            value:action.payload,
            type:'غياب',
            date:date
          }
          state.list.unshift(listOb)
        }
    },
    removeItem(state , action){
      const returned = state.monthAgo.filter((item)=> item.date !== action.payload)
      state.monthAgo = returned
    },
    checked(state){
      state.today = today
    },
    settingSalary(state , action){
      state.salary = action.payload
    },
    settingHourW(state , action){
      state.hourwork = action.payload
    },
    addToList(state , action){
      state.list.unshift(action.payload)
    },
    clear(state){
        const droneState = {
            date:getDateOfLastMonth(),
            today:+lastMonth() , 
            hourwork:state.hourwork , 
            extra:state.extra , 
            dobleExtra:state.dobleExtra,
            absence:state.absence,
            salary:state.salary,
        }
        state.monthAgo.unshift(droneState)

        state.extra = 0
        state.dobleExtra = 0
        state.absence = 0
        state.today = today
        state.list = []

    }
  },
})

export const {addExtra , addDoble , removeH , removeItem ,settingSalary , settingHourW , addToList , clear , checked} = DateSlice.actions
export default DateSlice.reducer