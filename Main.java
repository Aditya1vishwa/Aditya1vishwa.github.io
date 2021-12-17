public class Main{
    public static void main(String[] args) {
    


} 
    public int pivotIndex(int[] nums) {
        int sum1=0,sum2=0,i=0;
     for(i=0;i<nums.length;i++){
         for(int j=0;j<i;j++){sum1+=nums[j];}
         for(int k=nums.length-1;k>i;k--){sum2+=nums[k];}
         if(sum1==sum2){
                 break;  }     }
       
   return i; }
}