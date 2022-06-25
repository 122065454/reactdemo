import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './wode.module.css';

export default function Wode() {
  const history = useHistory();

  const data = {};

  return (
    <div className={`flex-col ${styles['page']}`}>
      <div className={`flex-col ${styles['header']}`}>
        <div className={`justify-between ${styles['group']}`}>
          <span className={`${styles['text']}`}>9:41</span>
          <div className={`flex-row ${styles['group_1']}`}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834185347774.png"
              className={`${styles['image']}`}
            />
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834150509331.png"
              className={`${styles['image_1']}`}
            />
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009849815279916.png"
              className={`${styles['image_2']}`}
            />
          </div>
        </div>
        <div className={`flex-row ${styles['group_2']}`}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834202809352.png"
            className={`${styles['image_3']}`}
          />
          <span className={`${styles['text_1']}`}>我的</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-row ${styles['section_1']}`}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328637855616.png"
            className={`${styles['image_4']}`}
          />
          <span className={`${styles['text_2']}`}>Fan Chen</span>
        </div>
        <div className={`flex-col ${styles['section_2']}`}>
          <span className={`${styles['text_3']}`}>我的订单</span>
          <div className={`flex-row ${styles['equal-division']}`}>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337528305414.png"
                className={`${styles['image_5']}`}
              />
              <span className={`${styles['text_4']}`}>待付款</span>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337794454995.png"
                className={`${styles['image_5']}`}
              />
              <span className={`${styles['text_4']}`}>待使用</span>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337834988033.png"
                className={`${styles['image_5']}`}
              />
              <span className={`${styles['text_4']}`}>待评价</span>
            </div>
            <div className={`flex-col items-center ${styles['equal-division-item']}`}>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337859367126.png"
                className={`${styles['image_5']}`}
              />
              <span className={`${styles['text_4']}`}>退款/售后</span>
            </div>
          </div>
        </div>
        <div className={`flex-col ${styles['section_3']}`}>
          <div className={`flex-row`}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632357078987519.png"
              className={`${styles['image_10']}`}
            />
            <span className={`${styles['text_9']}`}>我的浏览记录</span>
          </div>
          <div className={`flex-row ${styles['group_9']}`}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328709050413.png"
              className={`${styles['image_11']}`}
            />
            <span className={`${styles['text_10']}`}>我的收藏</span>
          </div>
          <div className={`flex-row ${styles['group_10']}`}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632357080184657.png"
              className={`${styles['image_12']}`}
            />
            <span className={`${styles['text_12']}`}>我的预约</span>
          </div>
        </div>
        <div className={`flex-row ${styles['section_4']}`}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328724869484.png"
            className={`${styles['image_13']}`}
          />
          <span className={`${styles['text_13']}`}>咨询热线</span>
        </div>
        <div className={`flex-col ${styles['section_4']}`}>
          <div className={`flex-row ${styles['group_11']}`}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632357082541476.png"
              className={`${styles['image_15']}`}
            />
            <span className={`${styles['text_14']}`}>服务条款</span>
          </div>
          <div className={`flex-row ${styles['group_9']}`}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328615957223.png"
              className={`${styles['image_16']}`}
            />
            <span className={`${styles['text_10']}`}>我要反馈</span>
          </div>
          <div className={`flex-row ${styles['group_12']}`}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337181384256.png"
              className={`${styles['image_13']}`}
            />
            <span className={`${styles['text_16']}`}>关于我们</span>
          </div>
        </div>
      </div>
    </div>
  );
}