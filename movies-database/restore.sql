SET client_encoding = 'UTF8';
SET standard_conforming_strings = 'on';
SELECT pg_catalog.set_config('search_path', '', false);

CREATE DATABASE movies WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
\connect movies;

CREATE TABLE public.movies (
    id integer,
    title character varying(150),
    genres character varying(50),
    year character varying(50)
);

CREATE TABLE public.users (
    id integer,
    email character varying(50),
    gender character varying(50),
    password character varying(50),
    role character varying(50)
);

COPY public.movies (id, title, genres, year) FROM '3319.dat';
COPY public.users (id, email, gender, password, role) FROM '3318.dat';
