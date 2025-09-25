 let projectList = document.querySelector(".projectList")

    let skills = [
        {
            "name": "Languages",
            "naming": " Python, SQL, SQL/PL, HTML, CSS, JavaScript"
        },
        {
            "name": "Libraries",
            "naming": " Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, XGBoost, Streamlit"
        },
        {
            "name": "ML Techniques",
            "naming": "Regression, Classification, Clustering, PCA, Decision Trees, Random Forest"
        },
        {
            "name": "Visualization",
            "naming": "Power BI, Tableau, Excel (Pivot Tables, Power Query, VBA)"
        },
        {
            "name": "Tools",
            "naming": "Jupyter, GitHub, VS Code, Anaconda, MySQL"
        },
        {
            "name": "Soft Skills",
            "naming": "Problem-solving, Communication, Documentation, Stakeholder Collaboration"
        }

    ]
    let projects = [
        {
            "name": "Rock vs Mine Prediction",
            "desc": "Engineered a binary classifier to detect sonar signals from rocks vs mines using 60 frequency features.Achieved 89% accuracy using logistic regression and SVM.Deployed using Streamlit for interactive prediction interface.",
            "link": "https://github.com/adi6499/RockVsMinePrediction",
            "img": "https://storage.googleapis.com/kaggle-datasets-images/1662635/2727659/3493b9309a1cf4f0c07aa6175b820060/dataset-card.jpg?t=2021-11-13-14-25-59"
        },
        {
            "name": "Loan Approval Prediction",
            "desc": "Built a model to predict loan approvals using applicant data; improved accuracy by 12%.Used decision trees and random forest for automated financial screening.Deployed with Streamlit for real-time loan eligibility checks",
            "link": "https://github.com/adi6499/Loan_Prediction",
            "img": "https://miro.medium.com/v2/resize:fit:735/0*_DPvD2SGibZBsb9f.jpg"
        },
        {
            "name": "Heart Disease Prediction",
            "desc": " Developed a classifier using clinical data; achieved 86% accuracyApplied logistic regression and KNN for early diagnosis support.Streamlit dashboard enabled user-friendly health risk assessment.",
            "link": "https://github.com/adi6499/Heart_Disease_Prediction",
            "img": "https://wallpapers.com/images/hd/heart-pictures-j54bpfeptxzojlrv.jpg"
        },
        {
            "name": "Calories Burnt Prediction",
            "desc": "Built a regression model to estimate calories burned from biometric and activity data.Enabled personalized fitness tracking using supervised learning.",
            "link": "https://github.com/adi6499/Calories_Burnt_Prediction",
            "img": "https://tse2.mm.bing.net/th/id/OIP.hS4slYAa86VRQdzQb8LsbQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            "name": "Breast Cancer Classification",
            "desc": "Predicted tumor malignancy using diagnostic features; achieved 94% accuracy.Applied SVM and random forest on the Wisconsin dataset.",
            "link": "https://github.com/adi6499/Breast_Cancer_Prediction",
            "img": "https://tse1.mm.bing.net/th/id/OIP._HdwqRWT0e0fhb6Sk5rp9gHaHa?w=736&h=736&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            "name": "Big Market Sale Prediction",
            "desc": "Forecasted retail sales using historical product and store data.Applied XGBoost and reduced RMSE by 18%.",
            "link": "https://github.com/adi6499/Big_Market_Sale_Prediction",
            "img": "https://tse1.mm.bing.net/th/id/OIP.fwi2XoeH6Xp7muZLHd1jIgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
    ]

    for (let i = 0; i < projects.length; i++) {
        projectList.innerHTML += `
        <div class="card">
        <img src=${projects[i].img}/>   
        <h4>${projects[i].name}</h4>
        <p>${projects[i].desc}</p>
        <a href=${projects[i].link} target="blank">Visit↗️</a> 
        </div>
        `
    }
  


// Create audio object first
var audio = new Audio("./computer-mouse-click-02-383961.mp3");

// Skills hover sound
let skillList = document.querySelector(".skillList");
for (let i = 0; i < skills.length; i++) {
    skillList.innerHTML += `
    <div class="skillCard">
        <h4>${skills[i].name}</h4>
        <p>${skills[i].naming}</p>
    </div>
    `;
}

// Create audio object first
var audio = new Audio("./computer-mouse-click-02-383961.mp3");

let card = document.querySelectorAll(".card");
card.forEach((c) => {
    c.addEventListener("mouseover", () => {
        audio.play();
        setTimeout(() => {
            audio.pause(); // Pause the audio
            audio.currentTime = 0; // Reset to the beginning (optional)
        }, 300); // 300 milliseconds
    });
});



let skillCard = document.querySelectorAll(".skillCard");
skillCard.forEach((c) => {
    c.addEventListener("mouseover", () => {
        audio.play();
        setTimeout(() => {
            audio.pause(); // Pause the audio
            audio.currentTime = 0; // Reset to the beginning (optional)
        }, 200); // 200 milliseconds
    });
});

// Dark mode toggle
// Dark mode toggle
const modeSwitch = document.querySelector(".switch");
const mode = document.querySelector(".mode");

mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");  // Toggle dark class

    // Optional: update switch appearance
    modeSwitch.classList.toggle("switchOn");
    modeSwitch.classList.toggle("switchOff");
});

