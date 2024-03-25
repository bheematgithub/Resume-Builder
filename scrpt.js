function create(){
                const githublink = document.getElementById('githublink').value;
                const LinkedInlink = document.getElementById('LinkedInlink').value;
                const portfolio = document.getElementById('portfolio').value;
                const firstName = document.getElementById('firstName').value;
                const phone = document.getElementById('phone').value;
                const github = document.getElementById('github').value;
                const email = document.getElementById('email').value;
                const linkedin = document.getElementById('linkedin').value;
                const personalPage = document.getElementById('PersonalPage').value;
                const objective = document.getElementById('Objective').value;
                const skills = document.getElementById('skill').value;
                const projects = document.getElementById('project').value;
                const workExperience = document.getElementById('wExpi').value;
                const education = document.getElementById('Education').value;
                const certification = document.getElementById('Certificate').value;
                const achievements = document.getElementById('Achive').value;

                const newPageHTML = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${firstName} - Resume</title>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">    
                </head>
                <body class="bg-white">
                    <div class="container p-3">
                        <section class="container text-center">
                            <h1>${firstName}</h1>
                           <nav class="d-flex justify-content-around py-4">
            
                            <a href="tel:${phone}" class="text-secondary ">${phone}</a> |
                            <a href="${githublink}" class="text-secondary ">${github}</a> |
                            <a href="mailto:${email}" class="text-secondary ">${email}</a> |
                            <a href="${LinkedInlink}" class="text-secondary ">${linkedin}</a> | 
                            <a href="${portfolio} class="text-secondary ">${personalPage}</a> 
            
                           </nav>
                        </section>
    
                        <div class="container">
                            <div class="objective">
                                 <h3>Objective</h3><br>
                                 <p>${objective}</p>
                            </div>
                            <div class="Skills">
                                <h3>Skills</h3><br>
                                <p>${skills}</p>
                            </div>
                            <div class="Projects">
                                <h3>Projects</h3><br>
                                <p>${projects}</p>
                            </div>
                            <div class="Work-Experience">
                                <h3>Work Experience</h3><br>
                                <p>${workExperience}</p>
                            </div>
                            <div class="Education">
                                <h3>Education</h3><br>
                                <p>${education}</p>
                            </div>
                            <div class="Certification">
                                <h3>Certification</h3><br>
                                <p>${certification}</p>
                            </div>
                            <div class="AAA">
                                <h3>Achievements/Activity/Awards</h3><br>
                                <p>${achievements}</p>
                            </div>
                        </div>
                    </div>
            
                    <script>
                        let interval=setTimeout(()=>{
                            window.print();
                        },2000);
                    </script>
                </body>
            </html>
                `;

                const newWindow = window.open();
                newWindow.document.open();
                newWindow.document.write(newPageHTML);
                newWindow.document.close();

                window.location.href = `${firstName.toLowerCase()}_resume.html`;
            };