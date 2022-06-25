import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './xiangqingye.module.css';

export default function Xiangqingye() {
  const history = useHistory();

  const data = {};

  return (
    <div className={`flex-col ${styles['page']}`}>
      <div className={`flex-col ${styles['header']}`}>
        <div className={`justify-between ${styles['group']}`}>
          <span>9:41</span>
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
          <span className={`${styles['text_1']}`}>空间详情</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_3']}`}>
        <div className={`flex-col`}>
          <div className={`flex-col`}>
            <span className={`${styles['text_2']}`}>维新软件科学园</span>
            <span className={`${styles['text_3']}`}>深圳市南山区中心路3331号</span>
          </div>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009955010780805.png"
            className={`${styles['image_4']}`}
          />
        </div>
        <div className={`flex-col ${styles['group_6']}`}>
          <span className={`${styles['text_4']}`}>简介</span>
          <span className={`${styles['text_5']}`}>
            FF办公空间之维新软件科学园，全新一站式办公空间与生活中心。地处深圳湾超级总部基地，与深圳宝安机场这样的国际化交通枢纽链接，使这处办公空间尽享得天独厚的地理优势，助您的事业通达全球。
          </span>
        </div>
        <div className={`flex-col ${styles['group_7']}`}>
          <span className={`${styles['text_6']}`}>价格</span>
          <span className={`${styles['text_7']}`}>专属办公室</span>
          <div className={`justify-between ${styles['group_8']}`}>
            <span className={`${styles['text_8']}`}>1 ~ 4 人</span>
            <div className={`flex-row`}>
              <span className={`${styles['text_9']}`}>¥2,240</span>
              <span className={`${styles['text_10']}`}>起/工位/月</span>
            </div>
          </div>
          <div className={`justify-between ${styles['group_10']}`}>
            <span className={`${styles['text_11']}`}>5 ~ 10 人</span>
            <div className={`flex-row`}>
              <span className={`${styles['text_12']}`}>¥2,180</span>
              <span className={`${styles['text_13']}`}>起/工位/月</span>
            </div>
          </div>
          <div className={`justify-between ${styles['group_12']}`}>
            <span className={`${styles['text_14']}`}>10+ 人</span>
            <div className={`flex-row`}>
              <span className={`${styles['text_15']}`}>¥2,120</span>
              <span className={`${styles['text_16']}`}>起/工位/月</span>
            </div>
          </div>
        </div>
        <div className={`flex-col items-center ${styles['button']}`}>
          <span>预约参观</span>
        </div>
      </div>
    </div>
  );
}