import React from 'react';
import styles from './Header.module.scss';
import { Container } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/actions/auth';

const Header = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.userData);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.body}>
          <Link href="/">
            <a className={styles.logo}>OZON</a>
          </Link>
          <ul className={styles.menu}>
            <li>
              <Link href="/">
                <a>Главная</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>О нас</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Контакты</a>
              </Link>
            </li>
          </ul>
          <ul className={styles.actions}>
            {userData ? (
              <>
                <li>
                  <Link href={`/profile/${userData.id}`}>
                    <a>Профиль</a>
                  </Link>
                </li>
                <li style={{ cursor: 'pointer' }} onClick={handleLogout}>
                  Выйти
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">
                    <a>Войти</a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a>Зарегистрироваться</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
