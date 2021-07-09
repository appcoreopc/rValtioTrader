import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchUser(action: any) {
    try {
       //const user = yield call(Api.fetchUser, action.payload.userId);
       console.log("here we go, getting our data ");
       yield put({type: "USER_FETCH_SUCCEEDED", user: { "first": "jeremy"}});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }
 
 function* mySaga() {
   console.log('saga111111111');
   yield takeLatest("toolbar/decrement", fetchUser);
 }
 
// supporting multiple sagas 
//  function* rootSaga () {
//    yield [
//        fork(saga1), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
//        fork(saga2),
//    ];
// }
 export default mySaga;