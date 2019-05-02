<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <div class="welcome">
                    <div class="top">欢迎回来 <b>{{ $store.state.user.username }}</b></div>
                    <div class="btm">最近一次登录于 <b>{{ $store.state.user.last_time }}</b></div>
                </div>
                <div class="today">
                    <div class="run-title">
                        <div class="left">今日统计资料</div>
                        <div class="right"></div>
                    </div>
                    <div class="list">

                        <div class="card">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增用户</div>
                                <div class="btm">
                                    <div class="line">今日：<b>0</b></div>
                                    <div class="line">昨日：<b>0</b></div>
                                    <div class="line">相较昨天：<b>0</b><img src="./image/btm.png" class="image"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增后台用户</div>
                                <div class="btm">
                                    <div class="line">今日：<b>0</b></div>
                                    <div class="line">昨日：<b>0</b></div>
                                    <div class="line">相较昨天：<b>0</b><img src="./image/btm.png" class="image"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增车辆</div>
                                <div class="btm">
                                    <div class="line">今日：<b>0</b></div>
                                    <div class="line">昨日：<b>0</b></div>
                                    <div class="line">相较昨天：<b>0</b><img src="./image/top.png" class="image"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增文章</div>
                                <div class="btm">
                                    <div class="line">今日：<b>0</b></div>
                                    <div class="line">昨日：<b>0</b></div>
                                    <div class="line">相较昨天：<b>0</b><img src="./image/btm.png" class="image"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增卖车申请</div>
                                <div class="btm">
                                    <div class="line">今日：<b>0</b></div>
                                    <div class="line">昨日：<b>0</b></div>
                                    <div class="line">相较昨天：<b>0</b><img src="./image/btm.png" class="image"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增值购申请</div>
                                <div class="btm">
                                    <div class="line">今日：<b>0</b></div>
                                    <div class="line">昨日：<b>0</b></div>
                                    <div class="line">相较昨天：<b>0</b><img src="./image/btm.png" class="image"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增分期购车申请</div>
                                <div class="btm">
                                    <div class="line">今日：<b>0</b></div>
                                    <div class="line">昨日：<b>0</b></div>
                                    <div class="line">相较昨天：<b>0</b><img src="./image/btm.png" class="image"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增预约看车申请</div>
                                <div class="btm">
                                    <div class="line">今日：<b>0</b></div>
                                    <div class="line">昨日：<b>0</b></div>
                                    <div class="line">相较昨天：<b>0</b><img src="./image/btm.png" class="image"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="history">
                    <div class="run-title">
                        <div class="left">昨日统计资料 </div>
                        <div class="right"></div>
                    </div>
                    <div class="list">

                        <div class="card-for-total">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">用户数</div>
                                <div class="btm">50</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">后台用户数</div>
                                <div class="btm">50</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">车辆数</div>
                                <div class="btm">50</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">文章数</div>
                                <div class="btm">50</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">卖车申请数</div>
                                <div class="btm">50</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">值购申请数</div>
                                <div class="btm">50</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">分期购车申请数</div>
                                <div class="btm">50</div>
                            </div>
                        </div>
                        <div class="card-for-total">
                            <div class="left"><img src="./image/user.png" class="image"></div>
                            <div class="right">
                                <div class="top">预约看车数</div>
                                <div class="btm">50</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chart">

                    <div class="top">

                        <div class="month chart-box">
                            <div class="run-title">

                                <div class="left">
                                    <div class="title"><img src="./image/month.png" class="image">月统计资料</div>
                                    <div class="year">
                                        年份：
                                        <i-select v-model="yearForMonth" style="width: 80px;">
                                            <i-option v-for="v in year" :key="v" :value="v">{{ v }}</i-option>
                                        </i-select>
                                    </div>
                                    <div class="month single">
                                        月份：
                                        <i-select v-model="monthForMonth" style="width: 80px;">
                                            <i-option v-for="v in month" :key="v" :value="v">{{ v }}</i-option>
                                        </i-select>
                                    </div>
                                    <div class="btns">
                                        <v-button color="blue">确定</v-button>
                                    </div>
                                </div>
                                <div class="right"></div>
                            </div>
                            <div class="con">
                                <div class="chart-container" ref="month"></div>
                            </div>
                        </div>

                        <div class="quarter chart-box">
                            <div class="run-title">
                                <div class="left">
                                    <div class="title"><img src="./image/quarter.png" class="image">季度统计资料</div>
                                    <div class="year">
                                        年份：
                                        <i-select v-model="yearForMonth" style="width: 80px;">
                                            <i-option v-for="v in year" :key="v" :value="v">{{ v }}</i-option>
                                        </i-select>
                                    </div>
                                    <div class="month single">
                                        季度：
                                        <i-select v-model="monthForMonth" style="width: 80px;">
                                            <i-option v-for="v in month" :key="v" :value="v">{{ v }}</i-option>
                                        </i-select>
                                    </div>
                                    <div class="btns">
                                        <v-button color="blue">确定</v-button>
                                    </div>
                                </div>
                                <div class="right"></div>
                            </div>
                            <div class="con">
                                <div class="chart-container" ref="quarter"></div>
                            </div>
                        </div>
                    </div>

                    <div class="btm chart-box">
                        <div class="run-title">
                            <div class="left">
                                <div class="title"><img src="./image/year.png" class="image">年统计资料</div>
                                <div class="year">
                                    年份：
                                    <i-select v-model="yearForMonth" style="width: 80px;">
                                        <i-option v-for="v in year" :key="v" :value="v">{{ v }}</i-option>
                                    </i-select>
                                </div>
                                <div class="month single">
                                    季度：
                                    <i-select v-model="monthForMonth" style="width: 80px;">
                                        <i-option v-for="v in month" :key="v" :value="v">{{ v }}</i-option>
                                    </i-select>
                                </div>
                                <div class="btns">
                                    <v-button color="blue">确定</v-button>
                                </div>
                            </div>
                            <div class="right"></div>
                        </div>
                        <div class="con">
                            <div class="chart-container" ref="year"></div>
                        </div>
                    </div>
                </div>
                <div class="system">

                </div>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/pannel.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/pannel.css"></style>