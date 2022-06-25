import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './shouye.module.css';

export default function Shouye() {
  const history = useHistory();

  const data = {
    list_VHC6CKGW: [null, null, null],
  };

  return (
    <div className={`flex-col ${styles['page']}`}>
      <div className={`flex-col ${styles['header']}`}>
        <div className={`justify-between`}>
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
        <span className={`${styles['text_1']}`}>FF办公空间</span>
      </div>
      <div className={`flex-col ${styles['group_2']}`}>
        <img
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093791214053.png"
          className={`${styles['image_3']}`}
        />
        <div className={`flex-row ${styles['equal-division']}`}>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113644013648.png"
              className={`${styles['image_4']}`}
            />
            <span className={`${styles['text_2']}`}>地图找楼</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113644167452.png"
              className={`${styles['image_4']}`}
            />
            <span className={`${styles['text_2']}`}>核心商圈</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113669698766.png"
              className={`${styles['image_4']}`}
            />
            <span className={`${styles['text_2']}`}>全景参观</span>
          </div>
          <div className={`flex-col items-center ${styles['equal-division-item']}`}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113663525642.png"
              className={`${styles['image_4']}`}
            />
            <span className={`${styles['text_2']}`}>咨询热线</span>
          </div>
        </div>
        <div className={`flex-col ${styles['group_7']}`}>
          <span className={`${styles['text_7']}`}>热推空间</span>
          <div className={`flex-col ${styles['list']}`}>
            {data.list_VHC6CKGW.map((item, i) => (
              <div className={`flex-row ${styles['list-item']}`} key={i}>
                <img
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093853079242.png"
                  className={`${styles['image_9']}`}
                />
                <div className={`flex-col ${styles['group_9']}`}>
                  <div className={`flex-col items-start`}>
                    <span className={`${styles['text_8']}`}>维新软件科学园</span>
                    <span className={`${styles['text_10']}`}>深圳市南山区中心路3331号</span>
                  </div>
                  <div className={`justify-end ${styles['group_11']}`}>
                    <span className={`${styles['text_12']}`}>¥1,870</span>
                    <span className={`${styles['text_14']}`}>起/工位/月</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}