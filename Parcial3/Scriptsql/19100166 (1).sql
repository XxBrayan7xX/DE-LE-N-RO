-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-05-2022 a las 17:37:10
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `19100166`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carros`
--

CREATE TABLE `carros` (
  `ID` int(11) NOT NULL,
  `VINumber` varchar(10) NOT NULL,
  `Marca` varchar(10) NOT NULL,
  `Modelo` int(10) NOT NULL,
  `Motor` varchar(4) NOT NULL,
  `Fabricante` varchar(10) NOT NULL,
  `Pais` varchar(10) NOT NULL,
  `Color` varchar(10) NOT NULL,
  `Placaas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carros`
--

INSERT INTO `carros` (`ID`, `VINumber`, `Marca`, `Modelo`, `Motor`, `Fabricante`, `Pais`, `Color`, `Placaas`) VALUES
(1, 'A1B2C3D4', 'Mustang', 1961, '5.0', 'FORD', 'BLACK', 'USA', 'X9154'),
(2, 'X4f55sunx', 'Camaro', 1994, '5.7', 'CHEVROLETE', 'Amarillo', 'USA', 'X9153'),
(3, 'E287DUH', 'Cgarger', 2015, '6.2', 'DODGE', 'RED', 'USA', 'X9157'),
(4, 'NSICE87', 'Escort', 2000, '2.0', 'FORD', 'Green', 'USA', 'X9159'),
(5, 'ACA2ND8', 'Malibu', 2002, '3.4', 'CHEVROLET', 'Orange', 'USA', 'X9151');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carros`
--
ALTER TABLE `carros`
  ADD UNIQUE KEY `Number` (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carros`
--
ALTER TABLE `carros`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
