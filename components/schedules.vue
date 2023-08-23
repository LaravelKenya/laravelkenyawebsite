<script lang="ts" setup></script>

<template>
  <section id="schedules" class="schedule section-padding">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Event Schedules</h2>
            <p class="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius
              illum vocent mediocritatem an <br> cule dicta iriure at phaedrum.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-5 text-center">
          <ul id="myTab" class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a id="monday-tab" aria-controls="monday" aria-expanded="true" class="nav-link active" data-toggle="tab"
                 href="#monday" role="tab">
                <div class="item-text">
                  <h4>Day 01</h4>
                  <h5>14 February 2020</h5>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a id="tuesday-tab" aria-controls="tuesday" class="nav-link" data-toggle="tab" href="#tuesday"
                 role="tab">
                <div class="item-text">
                  <h4>Day 02</h4>
                  <h5>15 February 2020</h5>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a id="wednesday-tab" aria-controls="wednesday" class="nav-link" data-toggle="tab" href="#wednesday"
                 role="tab">
                <div class="item-text">
                  <h4>Day 03</h4>
                  <h5>16 February 2020</h5>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a id="thursday-tab" aria-controls="thursday" class="nav-link" data-toggle="tab" href="#thursday"
                 role="tab">
                <div class="item-text">
                  <h4>Day 04</h4>
                  <h5>17 February 2020</h5>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12">
          <div class="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
            <div class="schedule-tab-content col-12 clearfix">
              <div id="myTabContent" class="tab-content">
                <div id="monday" aria-labelledby="monday-tab" class="tab-pane fade show active" role="tabpanel">
                  <div id="accordion">
                    <div class="card">
                      <div id="headingOne">
                        <div class="schedule-slot-time">
                          <span> 9.30 - 10.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseOne" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseOne" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-1.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseOne" aria-labelledby="headingOne" class="collapse show"
                           data-parent="#accordion">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingTwo">
                        <div class="schedule-slot-time">
                          <span> 10.30 - 11.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseTwo" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseTwo" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-2.jpg">
                          </div>
                          <h4>15 Free Productive Design Tools</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseTwo" aria-labelledby="headingTwo" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingThree">
                        <div class="schedule-slot-time">
                          <span> 11.30 - 12.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseThree" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseThree" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-3.jpg">
                          </div>
                          <h4>Getting Started With SketchApp</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseThree" aria-labelledby="headingThree" class="collapse"
                           data-parent="#accordion">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tuesday" aria-labelledby="tuesday-tab" class="tab-pane fade" role="tabpanel">
                  <div id="accordion2">
                    <div class="card">
                      <div id="headingOne1">
                        <div class="schedule-slot-time">
                          <span> 1.30 - 2.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseTwo2" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseTwo2" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-2.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseOne1" aria-labelledby="headingOne1" class="collapse show"
                           data-parent="#accordion2">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingTwo2">
                        <div class="schedule-slot-time">
                          <span> 9.30 - 10.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseOne1" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseOne1" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-1.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseTwo2" aria-labelledby="headingTwo2" class="collapse" data-parent="#accordion2">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="wednesday" aria-labelledby="wednesday-tab" class="tab-pane fade" role="tabpanel">
                  <div id="accordion3">
                    <div class="card">
                      <div id="headingOne3">
                        <div class="schedule-slot-time">
                          <span> 10.30 - 11.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseOne3" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseOne3" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-1.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseOne3" aria-labelledby="headingOne3" class="collapse show"
                           data-parent="#accordion3">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingTwo3">
                        <div class="schedule-slot-time">
                          <span> 11.30 - 12.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseTwo3" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseTwo3" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-2.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseTwo3" aria-labelledby="headingTwo3" class="collapse" data-parent="#accordion3">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingThree3">
                        <div class="schedule-slot-time">
                          <span> 1.30 - 2.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseThree3" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseThree3" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-3.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseThree3" aria-labelledby="headingThree3" class="collapse"
                           data-parent="#accordion3">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="thursday" aria-labelledby="thursday-tab" class="tab-pane fade" role="tabpanel">
                  <div id="accordion4">
                    <div class="card">
                      <div id="headingOne">
                        <div class="schedule-slot-time">
                          <span> 9.30 - 10.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseOne4" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseOne4" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-2.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseOne4" aria-labelledby="headingOne" class="collapse show"
                           data-parent="#accordion4">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingTwo">
                        <div class="schedule-slot-time">
                          <span> 10.30 - 11.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseTwo4" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseTwo4" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-1.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseTwo4" aria-labelledby="headingTwo" class="collapse" data-parent="#accordion4">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingThree4">
                        <div class="schedule-slot-time">
                          <span> 11.30 - 12.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseThree4" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseThree4" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-3.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseThree4" aria-labelledby="headingThree" class="collapse"
                           data-parent="#accordion4">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="friday" aria-labelledby="friday-tab" class="tab-pane fade" role="tabpanel">
                  <div id="accordion">
                    <div class="card">
                      <div id="headingOne">
                        <div class="schedule-slot-time">
                          <span> 9.30 - 10.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseTwo" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseTwo" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-2.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseOne" aria-labelledby="headingOne" class="collapse show"
                           data-parent="#accordion">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingTwo">
                        <div class="schedule-slot-time">
                          <span> 10.30 - 11.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseOne" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseOne" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-1.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseTwo" aria-labelledby="headingTwo" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div id="headingThree">
                        <div class="schedule-slot-time">
                          <span> 11.30 - 12.30 AM</span>
                          Workshop
                        </div>
                        <div aria-controls="collapseThree" aria-expanded="false" class="collapsed card-header"
                             data-target="#collapseThree" data-toggle="collapse">
                          <div class="images-box">
                            <img alt="" class="img-fluid" src="/assets/img/speaker/speakers-3.jpg">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseThree" aria-labelledby="headingThree" class="collapse"
                           data-parent="#accordion">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum
                            maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam,
                            provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit,
                            accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                          <div class="location">
                            <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped></style>
