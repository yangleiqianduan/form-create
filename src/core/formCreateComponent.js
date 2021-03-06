import {formCreateName} from './component';

const formCreateComponent = function (fComponent) {
    return {
        name:`${formCreateName}Core`,
        data() {
            return {
                formData:{},
                buttonProps:{},
                resetProps:{},
                trueData:{},
                jsonData:{}
            }
        },
        render:()=>{
            return fComponent.fRender.parse(fComponent.vm);
        },
        created(){
            fComponent.init(this);
        },
        methods:{
            changeFormData(field,value){
                this.$set(this.formData,field,value);
            },
            changeTrueData(field,value){
                this.$set(this.trueData[field],'value',value);
            },
            getTrueDataValue(field){
                return this.trueData[field].value;
            },
	        getTrueData(field){
		        return this.trueData[field];
	        },
            getFormData(field){
                return this.formData[field];
            },
            removeFormData(field){
                this.$delete(this.formData,field);
	            this.$delete(this.trueData,field);
	            this.$delete(this.jsonData,field);
            },
            changeButtonProps(props){
                this.$set(this,'buttonProps',Object.assign(this.buttonProps,props));
            },
            changeResetProps(props){
                this.$set(this,'resetProps',Object.assign(this.resetProps,props));
            },
	        setField(field){
		        this.$set(this.formData,field,'');
		        this.$set(this.trueData,field,{});
            },
        },
        mounted(){
            fComponent.mounted(this);
        }
    }
};

export default formCreateComponent;