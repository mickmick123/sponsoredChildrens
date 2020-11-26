<template>

	 <div class="wrapper-flex">
	 	 <cube-spin v-if="loadingStatus"> </cube-spin>
		 	<div v-else class="container" v-for="child in childrens" v-lazy-container="{selector:'img'}">
		      <div class='banner-img'></div>
			   <img v-lazy="child.imageLatestUrl" class='profile-img' >
			   <span class="child-id">{{child.sdChildId}}</span>
		       <h1 class="name">{{child.fullName}}</h1>
		      <div class="introduction" v-if="child.introduction!=''">{{child.introduction}}</div>
		      <div class="paragraph">{{child.paragraph}}</div>
		      	 <div class='wrapper'>
				    <tabs>
				      <tab title="Personal Info" >
				      	<div class="Rtable Rtable--2cols">
						  <div class="Rtable-cell"><h5>First Name:</h5></div>
						  <div class="Rtable-cell">{{child.firstName}}</div>
						  <div class="Rtable-cell"><h5>Last Name:</h5></div>
						  <div class="Rtable-cell">{{child.lastName}}</div>
						  <div class="Rtable-cell"><h5>Gender:</h5></div>
						  <div class="Rtable-cell">{{child.gender}}</div>
						  <div class="Rtable-cell"><h5>Birth Date:</h5></div>
						  <div class="Rtable-cell">{{child.birthDate | formatDate}}</div>
						   <div class="Rtable-cell"><h5>Language:</h5></div>
						  <div class="Rtable-cell">{{child.language}}</div>
						  <div class="Rtable-cell"><h5>Favorite Subject:</h5></div>
						  <div class="Rtable-cell">{{child.favoriteSubject==null ? 'N/A':child.favoriteSubject}}</div>
						  <div class="Rtable-cell"><h5>Chore:</h5></div>
						  <div class="Rtable-cell">{{child.chore==null ? 'N/A' : child.chore}}</div>
						</div>	
				      </tab>
				      <tab title="Sponsorship" >
				      	<div class="Rtable Rtable--2cols">
				      	  <div class="Rtable-cell"><h5>Project ID:</h5></div>
						  <div class="Rtable-cell">{{child.projectId}}</div>
						   <div class="Rtable-cell"><h5>Project Name:</h5></div>
						  <div class="Rtable-cell">{{child.projectName}}</div>
						  <div class="Rtable-cell"><h5>Sponsorship information ID:</h5></div>
						  <div class="Rtable-cell">{{child.crmSponsorshipInformationId}}</div>
						  <div class="Rtable-cell"><h5>Country:</h5></div>
						  <div class="Rtable-cell">{{child.country}}</div>
						  <div class="Rtable-cell"><h5>Sponsorship Date:</h5></div>
						  <div class="Rtable-cell">{{child.sponsorshipDate | formatDate}}</div>
						  <div class="Rtable-cell"><h5>Child ID:</h5></div>
						  <div class="Rtable-cell">{{child.sdChildId}}</div>
						  <div class="Rtable-cell"><h5>Child Number:</h5></div>
						  <div class="Rtable-cell">{{child.childNumber}}</div>
						  <div class="Rtable-cell"><h5>Active:</h5></div>
						  <div class="Rtable-cell">{{child.isActive}}</div>
						  <div class="Rtable-cell"><h5>Education Date:</h5></div>
						  <div class="Rtable-cell">{{child.educationDate | formatDate}}</div>
						</div>	
				      </tab>
				       <tab title="Health Status" >
				      	 <div class="paragraph">{{child.healthSentenceThirdPerson}}</div>
				      </tab>
				    </tabs>
				  </div>
				  
		    </div>

	 </div>
</template>

<script>
 import CubeSpin from 'vue-loading-spinner/src/components/Circle8';

  export default {
  	components: {
      CubeSpin
    },
    data:()=>({
    	//childrens:[],
    }),
    mounted(){
    	this.$store.dispatch('setCurrentData');
    },
    computed:{
    	childrens(){
    		return this.$store.getters.getChildrens;
    	},
    	loadingStatus(){
    		return this.$store.getters.getLoadingState;
    	}
    },
  }
	
</script>
