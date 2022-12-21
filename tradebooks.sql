-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Dez-2022 às 20:03
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tradebooks`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_adress`
--

CREATE TABLE `tb_adress` (
  `ID` int(11) NOT NULL,
  `CEP` varchar(8) NOT NULL,
  `RUA` varchar(20) NOT NULL,
  `BAIRRO` varchar(50) NOT NULL,
  `CIDADE` varchar(50) NOT NULL,
  `ESTADO` varchar(50) NOT NULL,
  `COMPLEMENTO` varchar(100) DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_books`
--

CREATE TABLE `tb_books` (
  `ID` int(11) NOT NULL,
  `TITLE_BOOK` varchar(100) NOT NULL,
  `PRICE` float(10,2) DEFAULT NULL,
  `DESCRIPTION_BOOK` varchar(255) NOT NULL,
  `CATEGORY` varchar(50) NOT NULL,
  `TIPO` varchar(10) NOT NULL,
  `QTDE` int(11) DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL,
  `ACABAMENTO` varchar(20) DEFAULT NULL,
  `MARCA` varchar(20) DEFAULT NULL,
  `ANO_EDICAO` int(11) DEFAULT NULL,
  `AUTOR` varchar(100) DEFAULT NULL,
  `EDITORA` varchar(100) DEFAULT NULL,
  `IDIOMA` varchar(25) DEFAULT NULL,
  `NUMERO_EDICAO` int(11) DEFAULT NULL,
  `NUMERO_PAGINAS` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_itens`
--

CREATE TABLE `tb_itens` (
  `ID` int(11) NOT NULL,
  `QTDE` int(11) NOT NULL,
  `ID_PEDIDOS` int(11) NOT NULL,
  `BOOKS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pedidos`
--

CREATE TABLE `tb_pedidos` (
  `ID` int(11) NOT NULL,
  `TYPE_PEDIDO` varchar(20) NOT NULL,
  `STATUS_PEDIDO` varchar(20) NOT NULL,
  `VALOR_FRETE` float(10,2) DEFAULT NULL,
  `VALOR_PPEDIDO` float(10,2) DEFAULT NULL,
  `VALOR_TOTAL` float(10,2) DEFAULT NULL,
  `DATE_PEDIDO` datetime DEFAULT NULL,
  `DATE_ENTREGA` datetime DEFAULT NULL,
  `USERS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `FULL_NAME` varchar(100) NOT NULL,
  `USER_NAME` varchar(100) NOT NULL,
  `BIRTH_DATE` date DEFAULT NULL,
  `CPF` varchar(11) DEFAULT NULL,
  `SEXO` varchar(20) DEFAULT NULL,
  `TEL` varchar(13) DEFAULT NULL,
  `EMAIL` varchar(100) NOT NULL,
  `UPASSWORD` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`ID`, `FULL_NAME`, `USER_NAME`, `BIRTH_DATE`, `CPF`, `SEXO`, `TEL`, `EMAIL`, `UPASSWORD`) VALUES
(1, 'Maria Isabel', 'MariaIsa', '2000-12-10', '25666', 'fem', '55555', 'mariaisabel@gmail.com', '12345678'),
(2, 'Roberto José', 'José', '1999-01-30', '45464', 'masc', '', 'rjose@gmail.com', '12345678'),
(3, 'Daniel Rodrigues Brandão', 'DRB', '1991-09-30', '41551379848', 'masc', '11973082815', 'drb12da@gmail.com', '12345678');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`);

--
-- Índices para tabela `tb_books`
--
ALTER TABLE `tb_books`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`);

--
-- Índices para tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `BOOKS_ID` (`BOOKS_ID`),
  ADD KEY `ID_PEDIDOS` (`ID_PEDIDOS`);

--
-- Índices para tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `USERS_ID` (`USERS_ID`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `USER_NAME` (`USER_NAME`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`),
  ADD UNIQUE KEY `CPF` (`CPF`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_books`
--
ALTER TABLE `tb_books`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `tb_adress`
--
ALTER TABLE `tb_adress`
  ADD CONSTRAINT `tb_adress_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`);

--
-- Limitadores para a tabela `tb_books`
--
ALTER TABLE `tb_books`
  ADD CONSTRAINT `tb_books_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`);

--
-- Limitadores para a tabela `tb_itens`
--
ALTER TABLE `tb_itens`
  ADD CONSTRAINT `tb_itens_ibfk_1` FOREIGN KEY (`BOOKS_ID`) REFERENCES `tb_books` (`ID`),
  ADD CONSTRAINT `tb_itens_ibfk_2` FOREIGN KEY (`ID_PEDIDOS`) REFERENCES `tb_pedidos` (`ID`);

--
-- Limitadores para a tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  ADD CONSTRAINT `tb_pedidos_ibfk_1` FOREIGN KEY (`USERS_ID`) REFERENCES `users` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
