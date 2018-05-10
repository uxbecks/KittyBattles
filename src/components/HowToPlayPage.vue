<template>
    <div class="container islight has-text-centered is-fluid">
        <!-- Kitty Battles -->
        <div class="columns howToMain" id="bottomMargin2">
            <div class="column is-3">
                <img src="assets/OpeningBK1.svg" class="is-200x200" alt="">
            </div>
            <div class="column is-6">
                <h1 class="title is-1" id="howToKB">KITTYBATTLES</h1>
                <h3 class="title is-2">- HOW TO PLAY GUIDE -</h3>
            </div>
            <div class="column is-3">
                <img src="assets/OpeningBK2.svg" class="is-200x200" alt="">
            </div>
        </div>

        <!-- Import Your Cats -->
        <div class="column howToPage">
            <div class="column">
            <div class="column is-12">
                <h3 class="title is-2">STEP 1: RECRUIT YOUR KITTIES</h3>
            </div>
            <div class="column is-12 StepImage">
                <p> KittyBattles is a 3 v 3 team battle game that is based off the popular
                    <a href="https://www.cryptokitties.co/" target="blank"> CryptoKitties </a>
                </p>
            </div>
            <div class="column is-6 is-offset-3">
                <img src="assets/Step1cats.svg" alt="">
           </div>
            <div class="column is-12">
                <p> To play you must have at least 3 CryptoKitties in your MetaMask wallet.</p>
                <p> You will be able to have up to 9 kittens in your battle roster at any given time. </p>
            </div></div>
        </div>


        <!-- Origins -->
        <div class="column howToPage">
            <div class="column is-12">
                 <h3 class="title is-2">STEP 2: BE MINDFUL OF ORIGINS</h3>
                <p> Each kitten has been given an "origin" based on it's specific body type.</p>
            </div>
       

            <div class="column is-6 is-offset-3"><img src="assets/Step2origins.svg">
        </div>
            <div class="column">
                <p> These origins have certain advantages and disadvantages against other origins.</p>
                <p>
                    <router-link to="/origin-page">Click here</router-link> to read up on all the different kitty origins. </p>
            </div>
        </div>

        <!-- Build Your Team -->
        <div class="column howToPage">
            <div class="column">
                 <h3 class="title is-2">STEP 3: BUILD YOUR TEAMS</h3>
                <p> Each team consists of 3 kittens, and you can have up to 3 battle teams.</p>
            </div>
    

        <div class="columns">
            <div class="column is-6 is-offset-3"><img src="assets/Step3Battle.svg"></div>
        </div>
        <div class="columns">
            <div class="column">
                <p> To play you must have at least 3 CryptoKitties in your MetaMask wallet.</p>
                <p> You will be able to have up to 9 kittens in your battle roster at any given time. </p>
            </div>
        </div></div>


        <!-- Practice Your Moves-->
        <div class="column howToPage">
            <div class="column is-12">
                 <h3 class="title is-2">STEP 4: PRACTICE YOUR MOVES</h3>
                <p> In the
                    <router-link to="/dojo">Dojo</router-link> you can practice your skills by battling against the computer.</p>
            </div>
   
   <div class="column is-6 is-offset-3"><img src="assets/Step4Dojo.svg" class="is-200x200"></div>        
        <div class="columns">
            <div class="column">
                <p> Here you can win Experience Points (XP) and Battle Points (BP) for your cats.</p>
                <p>Use the BP you earn here to challenge other players in the Battle Arena.</p>
            </div>
        </div>     </div>


        <!-- Battle Other Players -->
        <div class="column howToPage">
            <div class="column">
                 <h3 class="title is-2">STEP 5: BATTLE OTHER PLAYERS</h3>
                <p> The
                    <router-link to="/home">Battle Arena</router-link> lets you take your teams out for Player vs. Player battles.</p>
            </div>
      

   <div class="column is-6 is-offset-3"><img src="assets/Step5BOrder.svg"></div> 
        <div class="columns">
            <div class="column">
                <p> You will need to use BP you've earned in the Dojo to challenge other players.</p>
                <p> If you succeed you will win greater amounts of XP and the chance to level up! </p>
            </div>  </div>
        </div>


        <!-- Become A Battlemaster -->
        <div class="column howToPage">
            <div class="column">
                 <h3 class="title is-2">STEP 6: BECOME A KITTYBATTLE MASTER</h3>
                <p> Use your teams and skills wisely to become the ultimate KittyBattles Master!</p>
            </div>
           <div class="column is-4 is-offset-4"><img src="assets/Step6Master.svg"></div> 
 </div>
        <!-- Build Your Roster Button -->
        <router-link to="/roster" class="column is-4 startButton title is-3 has-text-centered">START BUILDING YOUR TEAM ROSTER NOW!</router-link>
    </div>
</template>

<script>
    export default {
        name: 'how-to-play-page',
        data() {
            return {};
        }
    }
</script>

<scope>

</scope>