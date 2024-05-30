import ReviewStore from "../../store/ReviewStore.js";

const RivewSubmitButton=(props)=>{
    let {isReviewSubmit}=ReviewStore();
    if (isReviewSubmit===false){
        return <button onClick={props.onClick} type="submit" className={props.className}>{props.text}</button>
    }else {
        return (
            <button disabled={true} className={props.className}>
                <span className="spinner-border spinner-border-sm"></span>
            </button>
        );
    }
};

export default RivewSubmitButton