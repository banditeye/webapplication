package com.mycompany.myproject.config;

import java.util.Properties;
import javax.annotation.Resource;
import javax.sql.DataSource;

import org.dozer.DozerBeanMapper;
import org.springframework.context.annotation.*;
import org.springframework.core.env.Environment;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.embedded.*;
import org.springframework.orm.jpa.*;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@ComponentScan("com.mycompany.myproject.persist")
@EnableJpaRepositories("com.mycompany.myproject.persist")
//pobranie ustawien bazy danych z pliku
@PropertySource("classpath:application.properties")
public class JPAConfig {

    //zmienne z nazwami ustawien w pliku z baza danych
    private static final String PROPERTY_NAME_DATABASE_DRIVER = "spring.datasource.driver-class-name";
    private static final String PROPERTY_NAME_DATABASE_PASSWORD = "spring.datasource.password";
    private static final String PROPERTY_NAME_DATABASE_URL = "spring.datasource.url";
    private static final String PROPERTY_NAME_DATABASE_USERNAME = "spring.datasource.username";
    private static final String PROPERTY_NAME_HIBERNATE_DIALECT = "spring.datasource.hibernate.dialect";
    private static final String PROPERTY_NAME_HIBERNATE_SHOW_SQL = "hibernate.show_sql";

    //pobiera wartosci zmiennych z pliku properties
    @Resource
    private Environment env;

    /**
     * Prosty sterownik JDBC
     * @return nowe polaczenie z kazdego wywo³ania funkcji getConnection
     */
    @Bean(name = "dataSource")
    public DataSource dataSource() {

        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(env.getRequiredProperty(PROPERTY_NAME_DATABASE_DRIVER));
        dataSource.setUrl(env.getRequiredProperty(PROPERTY_NAME_DATABASE_URL));
        dataSource.setUsername(env.getProperty(PROPERTY_NAME_DATABASE_USERNAME));
        dataSource.setPassword(env.getProperty(PROPERTY_NAME_DATABASE_PASSWORD));
        return dataSource;

        // return new EmbeddedDatabaseBuilder().setType(EmbeddedDatabaseType.HSQL).setName("myDb")
        // .addScript("classpath:schema.sql").addScript("classpath:data.sql").build();
    }

    @Bean(name = "entityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactoryBean() {
        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
        factoryBean.setDataSource(dataSource());
        factoryBean.setPackagesToScan("com.mycompany.myproject.persist");
        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setShowSql(true);
        factoryBean.setJpaVendorAdapter(vendorAdapter);
        factoryBean.setJpaProperties(hibernateProperties());
        return factoryBean;
    }

    /**
     * 
     * @return ustawienie dla hibernate 
     */
    private Properties hibernateProperties() {
        Properties properties = new Properties();
        properties.put(PROPERTY_NAME_HIBERNATE_DIALECT, env.getRequiredProperty(PROPERTY_NAME_HIBERNATE_DIALECT));
        return properties;
    }

    @Bean
    public PlatformTransactionManager transactionManager() {
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(entityManagerFactoryBean().getObject());
        return transactionManager;
    }

    @Bean
    public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
        return new PersistenceExceptionTranslationPostProcessor();
    }

    @Bean
    public DozerBeanMapper getMapper() {
        return new DozerBeanMapper();
    }

}
